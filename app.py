import os
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
import logging
import traceback
import sys
from flask_mysqldb import MySQL
from flask_mail import Mail, Message
import bcrypt
import re
from datetime import datetime
from functools import wraps

app = Flask(__name__)

# --- Logging configuration ---
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(logging.Formatter('%(asctime)s %(levelname)s %(name)s: %(message)s'))
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)

# ── MySQL Config ─────────────────────────────────────────────
app.secret_key                  = os.environ.get('SECRET_KEY', 'nexarya_super_secret_key_2025')
app.config['MYSQL_HOST']        = os.environ.get('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER']        = os.environ.get('MYSQL_USER')
app.config['MYSQL_PASSWORD']    = os.environ.get('MYSQL_PASSWORD')
app.config['MYSQL_DB']          = os.environ.get('MYSQL_DB')
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


def ensure_order_payment_columns():
    """Ensure payment-related columns exist on the `orders` table. Runs ALTER TABLE only when necessary."""
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = 'orders'",
            (app.config.get('MYSQL_DB'),)
        )
        existing = {r['COLUMN_NAME'] for r in cur.fetchall()}
        alters = []
        if 'payment_enabled' not in existing:
            alters.append("ADD COLUMN payment_enabled TINYINT(1) DEFAULT 0")
        if 'total_price' not in existing:
            alters.append("ADD COLUMN total_price DECIMAL(10,2) DEFAULT NULL")
        if 'payment_stages' not in existing:
            alters.append("ADD COLUMN payment_stages INT DEFAULT 1")
        if 'amount_paid' not in existing:
            alters.append("ADD COLUMN amount_paid DECIMAL(10,2) DEFAULT 0")
        if 'payment_stage_status' not in existing:
            alters.append("ADD COLUMN payment_stage_status TEXT DEFAULT NULL")

        if alters:
            sql = "ALTER TABLE orders " + ", ".join(alters)
            cur.execute(sql)
            mysql.connection.commit()
            print('[migrate] Applied:', sql)
        cur.close()
    except Exception as e:
        print('[migrate] Skipped or failed to apply order payment columns:', str(e))


# Try to apply schema changes at startup (no-op if DB already has columns)
try:
    ensure_order_payment_columns()
except Exception:
    pass

# ── Flask-Mail Config ───────────────────────────────────────
def parse_bool(value):
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.strip().lower() in ('1', 'true', 'yes', 'y', 'on')
    return False

app.config['MAIL_SERVER']        = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT']          = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS']       = parse_bool(os.environ.get('MAIL_USE_TLS', 'True'))
app.config['MAIL_USE_SSL']       = parse_bool(os.environ.get('MAIL_USE_SSL', 'False'))
app.config['MAIL_USERNAME']      = os.environ.get('MAIL_USERNAME', 'coderangers04@gmail.com')
app.config['MAIL_PASSWORD']      = os.environ.get('MAIL_PASSWORD', '')
app.config['MAIL_DEFAULT_SENDER']= os.environ.get('MAIL_DEFAULT_SENDER', 'coderangers04@gmail.com')
app.config['MAIL_DEBUG']         = parse_bool(os.environ.get('MAIL_DEBUG', 'False'))

mail = Mail(app)

# ── Razorpay Config ─────────────────────────────────────────
try:
    import razorpay
    RAZORPAY_KEY_ID = os.environ.get('RAZORPAY_KEY_ID', '').strip()
    RAZORPAY_KEY_SECRET = os.environ.get('RAZORPAY_KEY_SECRET', '').strip()
    print(f'[Razorpay] KEY_ID: {"SET" if RAZORPAY_KEY_ID else "NOT SET"}')
    print(f'[Razorpay] KEY_SECRET: {"SET" if RAZORPAY_KEY_SECRET else "NOT SET"}')
    if RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET:
        razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))
        RAZORPAY_ENABLED = True
        print('[Razorpay] ✓ ENABLED - Live payments active')
    else:
        razorpay_client = None
        RAZORPAY_ENABLED = False
        print('[Razorpay] ✗ DISABLED - credentials not set in .env')
        app.logger.warning('Razorpay credentials not set in environment. Razorpay payments will be disabled.')
except Exception as e:
    app.logger.warning('Failed to initialize Razorpay: %s', str(e))
    print(f'[Razorpay] ✗ ERROR: {str(e)}')
    razorpay_client = None
    RAZORPAY_ENABLED = False

# ── Decorators ───────────────────────────────────────────────
def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'user_id' not in session:
            flash('Please login to place an order.', 'warning')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated

def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'admin_id' not in session:
            return redirect(url_for('admin_login'))
        return f(*args, **kwargs)
    return decorated

# ── PUBLIC PAGES ─────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html', user=session.get('user_name'))

@app.route('/about')
def about():
    return render_template('about.html', user=session.get('user_name'))

@app.route('/services')
def services():
    return render_template('services.html', user=session.get('user_name'))

@app.route('/blog')
def blog():
    return render_template('blog.html', user=session.get('user_name'))

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return render_template('contact.html', user=session.get('user_name'))
    return render_template('contact.html', user=session.get('user_name'))

@app.route('/send-inquiry', methods=['POST'])
def send_inquiry():
    """Handle all inquiry forms: project inquiry, help, complaint, general inquiry"""
    try:
        data = request.get_json()
        inquiry_type = data.get('type', 'inquiry')
        
        # Extract common fields
        from_email = data.get('from_email', '').strip()
        from_name = data.get('from_name', '').strip()
        subject = data.get('subject', '').strip()
        message_body = data.get('message', '').strip()
        
        # Validate required fields
        if not all([from_email, subject, message_body]):
            return jsonify({'success': False, 'error': 'Missing required fields'}), 400
        
        # Type-specific subject prefix
        type_labels = {
            'project': 'Project Inquiry',
            'help': 'Help Request',
            'complaint': 'Complaint',
            'inquiry': 'General Inquiry'
        }
        type_label = type_labels.get(inquiry_type, 'Inquiry')
        
        # Build email body
        email_subject = f"[{type_label}] {subject}"
        
        email_body = f"""
New {type_label} from Nexarya Contact Form

From: {from_name}
Email: {from_email}
Type: {type_label}

Message:
{message_body}
"""
        
        # Add project-specific fields if this is a project inquiry
        if inquiry_type == 'project':
            phone = data.get('phone', 'Not provided')
            service = data.get('service', 'Not specified')
            email_body = f"""
New Project Inquiry from Nexarya Contact Form

From: {from_name}
Email: {from_email}
Phone: {phone}
Service Interested In: {service}

Message:
{message_body}
"""
        
        # Send email
        msg = Message(
            subject=email_subject,
            recipients=['coderangers04@gmail.com'],
            body=email_body,
            reply_to=from_email
        )
        mail.send(msg)
        
        return jsonify({'success': True, 'message': "Your message has been sent! We'll get back to you within 24 hours."}), 200
        
    except Exception as e:
        print(f"Email error: {str(e)}")
        return jsonify({'success': False, 'error': f'Failed to send email: {str(e)}'}), 500

# ── AUTH ──────────────────────────────────────────────────────
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name     = request.form.get('name', '').strip()
        email    = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')
        phone    = request.form.get('phone', '').strip()

        errors = []
        if not name:
            errors.append('Name is required.')
        if not re.match(r'^[^@]+@[^@]+\.[^@]+$', email):
            errors.append('Valid email required.')
        if len(password) < 6:
            errors.append('Password must be at least 6 characters.')
        if not re.match(r'^[0-9]{10}$', phone):
            errors.append('Valid 10-digit phone required.')

        if errors:
            return jsonify({'success': False, 'errors': errors})

        try:
            cur = mysql.connection.cursor()
            cur.execute("SELECT user_id FROM users WHERE email = %s", (email,))
            if cur.fetchone():
                cur.close()
                return jsonify({'success': False, 'errors': ['Email already registered.']})

            hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
            cur.execute(
                "INSERT INTO users (name, email, password_hash, phone) VALUES (%s, %s, %s, %s)",
                (name, email, hashed, phone)
            )
            mysql.connection.commit()
            user_id = cur.lastrowid
            cur.close()

            session['user_id']    = user_id
            session['user_name']  = name
            session['user_email'] = email
            return jsonify({'success': True, 'redirect': url_for('dashboard')})

        except Exception as e:
            return jsonify({'success': False, 'errors': [f'Database error: {str(e)}']})

    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email    = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')

        try:
            cur = mysql.connection.cursor()
            cur.execute("SELECT * FROM users WHERE email = %s", (email,))
            user = cur.fetchone()
            cur.close()

            if user and bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
                session['user_id']    = user['user_id']
                session['user_name']  = user['name']
                session['user_email'] = user['email']
                next_url = request.args.get('next', url_for('dashboard'))
                return jsonify({'success': True, 'redirect': next_url})

            return jsonify({'success': False, 'errors': ['Invalid email or password.']})

        except Exception as e:
            return jsonify({'success': False, 'errors': [f'Database error: {str(e)}']})

    return render_template('login.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

# ── USER DASHBOARD ────────────────────────────────────────────
@app.route('/dashboard')
@login_required
def dashboard():
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM orders WHERE user_id = %s ORDER BY order_date DESC",
        (session['user_id'],)
    )
    orders = cur.fetchall()
    cur.close()
    return render_template('dashboard.html', orders=orders, user=session.get('user_name'))


@app.route('/place-order', methods=['GET', 'POST'])
@login_required
def place_order():
    if request.method == 'POST':
        # Accept JSON requests and fall back to form-encoded POSTs
        data = request.get_json(silent=True)
        if not data:
            data = request.form.to_dict()

        # Accept both API field names and the form names used in the template
        domain   = (data.get('domain') or data.get('project_name') or '').strip()
        details  = (data.get('details') or data.get('description') or '').strip()
        # location isn't in the form; accept timeline or budget as a fallback, or mark unspecified
        location = (data.get('location') or data.get('timeline') or data.get('budget') or 'Not specified').strip()
        # plan may be sent as 'plan' or 'service_type' in the form; fall back to budget
        plan     = (data.get('plan') or data.get('service_type') or data.get('budget') or 'Not specified').strip()

        # Require at least a project name/domain and a description/details
        if not all([domain, details]):
            return jsonify({'success': False, 'error': 'Project name and description are required.'}), 400

        # Normalize plan to match DB ENUM('Basic','Standard','Premium') to avoid truncation
        def normalize_plan(value):
            if not value:
                return 'Standard'
            v = value.strip()
            allowed = ('Basic', 'Standard', 'Premium')
            if v in allowed:
                return v

            # Map budget ranges (as shown in the form) to plan tiers
            if 'Under' in v or 'Under' in v or 'Under' in v:
                return 'Basic'
            if '25,000' in v and '75,000' in v:
                return 'Standard'
            if '75,000' in v or '2,00,000' in v or '2,00,000+' in v or '₹2,00,000' in v:
                return 'Premium'
            if 'Not sure' in v:
                return 'Standard'

            # Map service_type keys to tiers
            st = v.lower()
            if 'qa' in st or 'testing' in st or 'maintenance' in st:
                return 'Basic'
            if 'web' in st or 'admin' in st or 'hosting' in st:
                return 'Standard'
            if 'ai' in st or 'cloud' in st:
                return 'Premium'

            # Default fallback
            return 'Standard'

        plan = normalize_plan(plan)

        cur = mysql.connection.cursor()
        cur.execute(
            """INSERT INTO orders
               (user_id, order_domain, details, user_location, plan_selected, tracking_status, order_date)
               VALUES (%s, %s, %s, %s, %s, 'Pending', NOW())""",
            (session['user_id'], domain, details, location, plan)
        )
        mysql.connection.commit()
        order_id = cur.lastrowid
        cur.close()
        return jsonify({'success': True, 'order_id': order_id})

    selected_plan = request.args.get('plan', '')
    return render_template('place_order.html', selected_plan=selected_plan, user=session.get('user_name'))


@app.route('/order/<int:order_id>')
@login_required
def order_detail(order_id):
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM orders WHERE order_id = %s AND user_id = %s",
        (order_id, session['user_id'])
    )
    order = cur.fetchone()
    cur.close()
    if not order:
        return redirect(url_for('dashboard'))
    return render_template('order_detail.html', order=order, user=session.get('user_name'))


@app.route('/order/')
@login_required
def order_root():
    # User requested /order/ without an id — redirect to dashboard which lists orders
    return redirect(url_for('dashboard'))

# ── ADMIN ─────────────────────────────────────────────────────
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        try:
            cur = mysql.connection.cursor()
            cur.execute("SELECT * FROM admins WHERE username = %s", (username,))
            admin = cur.fetchone()
            cur.close()

            if admin and bcrypt.checkpw(password.encode('utf-8'), admin['password_hash'].encode('utf-8')):
                session['admin_id']   = admin['admin_id']
                session['admin_name'] = admin['username']
                return redirect(url_for('admin_dashboard'))

            flash('Invalid credentials', 'error')

        except Exception as e:
            flash(f'Database error: {str(e)}', 'error')

    return render_template('admin/login.html')


@app.route('/admin/logout')
def admin_logout():
    session.pop('admin_id', None)
    session.pop('admin_name', None)
    return redirect(url_for('admin_login'))


@app.route('/admin')
@admin_required
def admin_dashboard():
    cur = mysql.connection.cursor()
    cur.execute("SELECT COUNT(*) as c FROM orders")
    total_orders = cur.fetchone()['c']

    cur.execute("SELECT COUNT(*) as c FROM users")
    total_users = cur.fetchone()['c']

    cur.execute("SELECT COUNT(*) as c FROM orders WHERE tracking_status = 'Completed'")
    completed = cur.fetchone()['c']

    cur.execute("""
        SELECT o.*, u.name as user_name, u.email, u.phone
        FROM orders o
        JOIN users u ON o.user_id = u.user_id
        ORDER BY o.order_date DESC
        LIMIT 10
    """)
    recent_orders = cur.fetchall()
    cur.close()

    return render_template(
        'admin/dashboard.html',
        total_orders=total_orders,
        total_users=total_users,
        completed=completed,
        recent_orders=recent_orders,
        admin=session.get('admin_name')
    )


@app.route('/admin/orders')
@admin_required
def admin_orders():
    status_filter = request.args.get('status', '')
    cur = mysql.connection.cursor()

    if status_filter:
        cur.execute("""
            SELECT o.*, u.name as user_name, u.email, u.phone
            FROM orders o
            JOIN users u ON o.user_id = u.user_id
            WHERE o.tracking_status = %s
            ORDER BY o.order_date DESC
        """, (status_filter,))
    else:
        cur.execute("""
            SELECT o.*, u.name as user_name, u.email, u.phone
            FROM orders o
            JOIN users u ON o.user_id = u.user_id
            ORDER BY o.order_date DESC
        """)

    orders = cur.fetchall()
    cur.close()
    return render_template(
        'admin/orders.html',
        orders=orders,
        status_filter=status_filter,
        admin=session.get('admin_name')
    )


@app.route('/admin/orders/<int:order_id>')
@admin_required
def admin_order_detail(order_id):
    cur = mysql.connection.cursor()
    cur.execute("""
        SELECT o.*, u.name as user_name, u.email, u.phone
        FROM orders o
        JOIN users u ON o.user_id = u.user_id
        WHERE o.order_id = %s
    """, (order_id,))
    order = cur.fetchone()
    cur.close()
    if not order:
        flash('Order not found', 'error')
        return redirect(url_for('admin_orders'))
    return render_template('admin/order_detail.html', order=order, admin=session.get('admin_name'))


@app.route('/admin/order/<int:order_id>/payment', methods=['GET', 'POST'])
@admin_required
def admin_set_payment(order_id):
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # accept form-encoded POST from admin UI
        total = request.form.get('total_price')
        stages = request.form.get('payment_stages')
        enabled = request.form.get('payment_enabled')
        try:
            total_val = float(total) if total else None
            stages_val = int(stages) if stages else 1
            enabled_val = 1 if enabled == 'on' else 0
            try:
                cur.execute(
                    "UPDATE orders SET total_price = %s, payment_stages = %s, payment_enabled = %s WHERE order_id = %s",
                    (total_val, stages_val, enabled_val, order_id)
                )
                mysql.connection.commit()
                flash('Payment settings updated', 'success')
            except Exception as inner_e:
                msg = str(inner_e)
                # If columns are missing, attempt to create them and retry once
                if 'Unknown column' in msg or '1054' in msg:
                    try:
                        ensure_order_payment_columns()
                        cur.execute(
                            "UPDATE orders SET total_price = %s, payment_stages = %s, payment_enabled = %s WHERE order_id = %s",
                            (total_val, stages_val, enabled_val, order_id)
                        )
                        mysql.connection.commit()
                        flash('Payment settings updated (after applying DB migration)', 'success')
                    except Exception as final_e:
                        flash(f'Error updating payment settings after migration: {str(final_e)}', 'error')
                else:
                    flash(f'Error updating payment settings: {msg}', 'error')
        except Exception as e:
            flash(f'Error updating payment settings: {str(e)}', 'error')

    cur.execute("SELECT * FROM orders WHERE order_id = %s", (order_id,))
    order = cur.fetchone()
    cur.close()
    if not order:
        flash('Order not found', 'error')
        return redirect(url_for('admin_orders'))
    return render_template('admin/set_payment.html', order=order, admin=session.get('admin_name'))


@app.route('/pay/<int:order_id>')
@login_required
def pay_order(order_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM orders WHERE order_id = %s AND user_id = %s", (order_id, session['user_id']))
    order = cur.fetchone()
    cur.close()
    if not order:
        flash('Order not found', 'error')
        return redirect(url_for('dashboard'))
    if not order.get('payment_enabled'):
        flash('Payment not enabled for this order yet.', 'warning')
        return redirect(url_for('order_detail', order_id=order_id))

    # Simple simulated payment page. Integrate real gateway here.
    return render_template('pay.html', order=order, user=session.get('user_name'))


@app.route('/pay/<int:order_id>/create-razorpay-order', methods=['POST'])
@login_required
def create_razorpay_order(order_id):
    """Create a Razorpay order for payment."""
    if not RAZORPAY_ENABLED:
        return jsonify({'success': False, 'error': 'Razorpay not configured. Use Test Payment button instead.'}), 400
    
    try:
        data = request.get_json() or request.form.to_dict()
        amount = float(data.get('amount', 0))
        if amount <= 0:
            return jsonify({'success': False, 'error': 'Invalid amount'}), 400
        
        # Verify order exists and belongs to user
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM orders WHERE order_id = %s AND user_id = %s", (order_id, session['user_id']))
        order = cur.fetchone()
        cur.close()
        
        if not order:
            return jsonify({'success': False, 'error': 'Order not found'}), 404
        
        # Create Razorpay order (amount in paise: multiply by 100)
        rz_order = razorpay_client.order.create({
            'amount': int(amount * 100),
            'currency': 'INR',
            'receipt': f'nexarya-order-{order_id}',
            'notes': {
                'order_id': str(order_id),
                'user_id': str(session['user_id'])
            }
        })
        
        # Store Razorpay order ID in session for verification
        session[f'rzpay_order_{order_id}'] = rz_order['id']
        
        return jsonify({
            'success': True,
            'razorpay_order_id': rz_order['id'],
            'razorpay_key_id': RAZORPAY_KEY_ID,
            'amount': amount,
            'amount_paise': int(amount * 100)
        })
    except Exception as e:
        app.logger.error('create_razorpay_order error: %s', str(e))
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/pay/<int:order_id>/verify-razorpay', methods=['POST'])
@login_required
def verify_razorpay_payment(order_id):
    """Verify Razorpay payment and update order."""
    try:
        data = request.get_json() or request.form.to_dict()
        razorpay_payment_id = data.get('razorpay_payment_id')
        razorpay_order_id = data.get('razorpay_order_id')
        razorpay_signature = data.get('razorpay_signature')
        
        if not all([razorpay_payment_id, razorpay_order_id, razorpay_signature]):
            return jsonify({'success': False, 'error': 'Missing payment details'}), 400
        
        # Verify signature
        import hmac
        import hashlib
        message = f"{razorpay_order_id}|{razorpay_payment_id}"
        expected_sig = hmac.new(
            RAZORPAY_KEY_SECRET.encode(),
            message.encode(),
            hashlib.sha256
        ).hexdigest()
        
        if razorpay_signature != expected_sig:
            app.logger.warning('Razorpay signature mismatch for order %s', order_id)
            return jsonify({'success': False, 'error': 'Payment verification failed'}), 403
        
        # Get payment amount from Razorpay API
        payment_details = razorpay_client.payment.fetch(razorpay_payment_id)
        if payment_details.get('status') != 'captured':
            return jsonify({'success': False, 'error': 'Payment not captured'}), 400
        
        amount = float(payment_details.get('amount', 0)) / 100  # Convert from paise
        
        # Update order
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM orders WHERE order_id = %s AND user_id = %s", (order_id, session['user_id']))
        order = cur.fetchone()
        
        if not order:
            cur.close()
            return jsonify({'success': False, 'error': 'Order not found'}), 404
        
        new_paid = float(order.get('amount_paid') or 0) + amount
        cur.execute("UPDATE orders SET amount_paid = %s WHERE order_id = %s", (new_paid, order_id))
        
        # If fully paid, update status
        total = float(order.get('total_price') or 0)
        if total and new_paid >= total:
            cur.execute("UPDATE orders SET tracking_status = 'Completed' WHERE order_id = %s", (order_id,))
        
        mysql.connection.commit()
        cur.close()
        
        return jsonify({
            'success': True,
            'amount_paid': new_paid,
            'message': f'Payment of ₹{amount:.2f} recorded successfully'
        })
    except Exception as e:
        app.logger.error('verify_razorpay_payment error: %s', str(e))
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/pay/<int:order_id>/simulate', methods=['POST'])
@login_required
def simulate_payment(order_id):
    # This endpoint simulates a successful payment for a stage. For production, replace with real gateway webhook.
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM orders WHERE order_id = %s AND user_id = %s", (order_id, session['user_id']))
    order = cur.fetchone()
    if not order:
        cur.close()
        return jsonify({'success': False, 'error': 'Order not found.'}), 404

    try:
        amount = float(request.form.get('amount') or request.json.get('amount') or 0)
    except Exception:
        amount = 0

    # Update amount_paid and possibly tracking
    new_paid = float(order.get('amount_paid') or 0) + amount
    cur.execute("UPDATE orders SET amount_paid = %s WHERE order_id = %s", (new_paid, order_id))
    # If fully paid, update tracking_status
    total = float(order.get('total_price') or 0)
    if total and new_paid >= total:
        cur.execute("UPDATE orders SET tracking_status = 'Completed' WHERE order_id = %s", (order_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'success': True, 'amount_paid': new_paid})


@app.route('/admin/order/<int:order_id>/update', methods=['POST'])
@admin_required
def update_order_status(order_id):
    # Accept JSON or form-encoded POSTs. Be permissive to avoid 415 errors.
    data = request.get_json(silent=True)
    if not data:
        # try form data
        try:
            data = request.form.to_dict()
        except Exception:
            data = {}

    new_status = (data.get('status') if isinstance(data, dict) else None)
    valid_statuses = ['Pending', 'In Review', 'In Progress', 'Testing', 'Completed', 'Cancelled']

    # Detect if this is an API/AJAX call (prefer JSON) vs a direct browser form/navigation
    is_api_call = False
    try:
        if request.is_json:
            is_api_call = True
    except Exception:
        is_api_call = False
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest' or request.headers.get('Content-Type','').startswith('application/json'):
        is_api_call = True

    if new_status not in valid_statuses:
        if is_api_call:
            return jsonify({'success': False, 'error': 'Invalid status.'}), 400
        else:
            flash('Invalid status provided.', 'error')
            return redirect(request.referrer or url_for('admin_orders'))

    try:
        cur = mysql.connection.cursor()
    except Exception as e:
        return jsonify({'success': False, 'error': 'Database error: ' + str(e)}), 500
    if new_status == 'Completed':
        cur.execute(
            "UPDATE orders SET tracking_status = %s, order_complete_date = NOW() WHERE order_id = %s",
            (new_status, order_id)
        )
    else:
        cur.execute(
            "UPDATE orders SET tracking_status = %s WHERE order_id = %s",
            (new_status, order_id)
        )
    mysql.connection.commit()
    cur.close()

    # If the request appears to be from an API call (JSON or XHR), return JSON.
    is_api_call = False
    try:
        if request.is_json:
            is_api_call = True
    except Exception:
        is_api_call = False
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest' or request.headers.get('Content-Type','').startswith('application/json'):
        is_api_call = True

    if is_api_call:
        return jsonify({'success': True})

    # Otherwise, user visited endpoint directly via browser — flash and redirect back
    flash('Order updated successfully.', 'success')
    ref = request.referrer or url_for('admin_orders')
    return redirect(ref)


@app.route('/admin/users')
@admin_required
def admin_users():
    cur = mysql.connection.cursor()
    cur.execute("""
        SELECT u.*, COUNT(o.order_id) as order_count
        FROM users u
        LEFT JOIN orders o ON u.user_id = o.user_id
        GROUP BY u.user_id
        ORDER BY u.user_id DESC
    """)
    users = cur.fetchall()
    cur.close()
    return render_template('admin/users.html', users=users, admin=session.get('admin_name'))

# ── API ───────────────────────────────────────────────────────
@app.route('/api/order-statuses')
@login_required
def order_statuses():
    """Returns current statuses for all orders of the logged-in user. Used by dashboard polling."""
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT order_id, tracking_status FROM orders WHERE user_id = %s",
        (session['user_id'],)
    )
    orders = cur.fetchall()
    cur.close()
    return jsonify({'orders': orders})


@app.route('/admin/api/orders-summary')
@admin_required
def admin_orders_summary():
    """Return a small summary of recent orders for admin polling/notifications."""
    try:
        cur = mysql.connection.cursor()
        cur.execute("""
            SELECT o.order_id, o.tracking_status, o.order_date, u.name as user_name
            FROM orders o
            JOIN users u ON o.user_id = u.user_id
            ORDER BY o.order_date DESC
            LIMIT 50
        """)
        rows = cur.fetchall()
        cur.close()
        return jsonify({'orders': rows})
    except Exception as e:
        app.logger.error('admin_orders_summary error: %s', str(e))
        return jsonify({'orders': []}), 500

@app.route('/api/check-email', methods=['POST'])
def check_email():
    try:
        data  = request.get_json()
        email = data.get('email', '').lower()
        cur   = mysql.connection.cursor()
        cur.execute("SELECT user_id FROM users WHERE email = %s", (email,))
        exists = cur.fetchone() is not None
        cur.close()
        return jsonify({'exists': exists})
    except Exception as e:
        return jsonify({'exists': False, 'error': str(e)}), 500

# ── AWS LAMBDA (uncomment when deploying) ─────────────────────
# from mangum import Mangum
# handler = Mangum(app)

# ── LOCAL DEV ─────────────────────────────────────────────────
if __name__ == '__main__':
    app.run(debug=True)


@app.errorhandler(404)
def handle_404(err):
    app.logger.warning('404 Not Found: %s', request.path)
    # Return JSON for API/XHR requests
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest' or request.is_json:
        return jsonify({'success': False, 'error': 'Not found'}), 404
    flash('Requested page not found.', 'error')
    return redirect(request.referrer or url_for('index'))


@app.errorhandler(Exception)
def handle_exception(e):
    tb = traceback.format_exc()
    app.logger.error('Unhandled exception: %s\n%s', str(e), tb)
    # For API/XHR callers, return JSON
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest' or request.is_json:
        return jsonify({'success': False, 'error': 'Internal server error'}), 500
    # For regular browser requests, flash and redirect back
    flash('An unexpected error occurred. Please try again or contact support.', 'error')
    return redirect(request.referrer or url_for('index'))