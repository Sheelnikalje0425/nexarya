import os

from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
from flask_mysqldb import MySQL

import bcrypt
import re
from datetime import datetime
from functools import wraps

app = Flask(__name__)
app.secret_key = 'nexarya_super_secret_key_2025'

# ── MySQL Config ────────────────────────────────────────────
app.secret_key = os.environ.get('SECRET_KEY')
app.config['MYSQL_HOST'] = os.environ.get('MYSQL_HOST')
app.config['MYSQL_USER'] = os.environ.get('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.environ.get('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.environ.get('MYSQL_DB')

mysql = MySQL(app)

# ── Decorators ──────────────────────────────────────────────
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

# ── PUBLIC PAGES ────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html', user=session.get('user_name'))

@app.route('/about')
def about():
    return render_template('about.html', user=session.get('user_name'))

@app.route('/services')
def services():
    return render_template('services.html', user=session.get('user_name'))

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', user=session.get('user_name'))

@app.route('/pricing')
def pricing():
    return render_template('pricing.html', user=session.get('user_name'))

@app.route('/blog')
def blog():
    return render_template('blog.html', user=session.get('user_name'))

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return jsonify({'success': True, 'message': "Thanks! We'll get back to you soon."})
    return render_template('contact.html', user=session.get('user_name'))

# ── AUTH ─────────────────────────────────────────────────────
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')
        phone = request.form.get('phone', '').strip()

        errors = []
        if not name: errors.append('Name is required.')
        if not re.match(r'^[^@]+@[^@]+\.[^@]+$', email): errors.append('Valid email required.')
        if len(password) < 6: errors.append('Password must be at least 6 characters.')
        if not re.match(r'^[0-9]{10}$', phone): errors.append('Valid 10-digit phone required.')

        if errors:
            return jsonify({'success': False, 'errors': errors})

        cur = mysql.connection.cursor()
        cur.execute("SELECT user_id FROM users WHERE email = %s", (email,))
        if cur.fetchone():
            cur.close()
            return jsonify({'success': False, 'errors': ['Email already registered.']})

        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        cur.execute("INSERT INTO users (name, email, password_hash, phone) VALUES (%s, %s, %s, %s)",
                    (name, email, hashed, phone))
        mysql.connection.commit()
        user_id = cur.lastrowid
        cur.close()

        session['user_id'] = user_id
        session['user_name'] = name
        session['user_email'] = email
        return jsonify({'success': True, 'redirect': url_for('dashboard')})

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cur.fetchone()
        cur.close()

        if user and bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
            session['user_id'] = user['user_id']
            session['user_name'] = user['name']
            session['user_email'] = user['email']
            next_url = request.args.get('next', url_for('dashboard'))
            return jsonify({'success': True, 'redirect': next_url})
        return jsonify({'success': False, 'errors': ['Invalid email or password.']})

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

# ── USER DASHBOARD ──────────────────────────────────────────
@app.route('/dashboard')
@login_required
def dashboard():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM orders WHERE user_id = %s ORDER BY order_date DESC", (session['user_id'],))
    orders = cur.fetchall()
    cur.close()
    return render_template('dashboard.html', orders=orders, user=session.get('user_name'))

@app.route('/place-order', methods=['GET', 'POST'])
@login_required
def place_order():
    if request.method == 'POST':
        data = request.get_json()
        domain = data.get('domain', '').strip()
        details = data.get('details', '').strip()
        location = data.get('location', '').strip()
        plan = data.get('plan', '').strip()

        if not all([domain, details, location, plan]):
            return jsonify({'success': False, 'error': 'All fields required.'})

        cur = mysql.connection.cursor()
        cur.execute("""INSERT INTO orders (user_id, order_domain, details, user_location, plan_selected, tracking_status, order_date)
                       VALUES (%s, %s, %s, %s, %s, 'Pending', NOW())""",
                    (session['user_id'], domain, details, location, plan))
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
    cur.execute("SELECT * FROM orders WHERE order_id = %s AND user_id = %s", (order_id, session['user_id']))
    order = cur.fetchone()
    cur.close()
    if not order:
        return redirect(url_for('dashboard'))
    return render_template('order_detail.html', order=order, user=session.get('user_name'))

# ── ADMIN ───────────────────────────────────────────────────
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM admins WHERE username = %s", (username,))
        admin = cur.fetchone()
        cur.close()
        if admin and bcrypt.checkpw(password.encode('utf-8'), admin['password_hash'].encode('utf-8')):
            session['admin_id'] = admin['admin_id']
            session['admin_name'] = admin['username']
            return redirect(url_for('admin_dashboard'))
        flash('Invalid credentials', 'error')
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
    cur.execute("""SELECT o.*, u.name as user_name, u.email, u.phone FROM orders o
                   JOIN users u ON o.user_id = u.user_id ORDER BY o.order_date DESC LIMIT 10""")
    recent_orders = cur.fetchall()
    cur.close()
    return render_template('admin/dashboard.html',
                           total_orders=total_orders, total_users=total_users,
                           completed=completed, recent_orders=recent_orders,
                           admin=session.get('admin_name'))

@app.route('/admin/orders')
@admin_required
def admin_orders():
    status_filter = request.args.get('status', '')
    cur = mysql.connection.cursor()
    if status_filter:
        cur.execute("""SELECT o.*, u.name as user_name, u.email, u.phone FROM orders o
                       JOIN users u ON o.user_id = u.user_id WHERE o.tracking_status = %s
                       ORDER BY o.order_date DESC""", (status_filter,))
    else:
        cur.execute("""SELECT o.*, u.name as user_name, u.email, u.phone FROM orders o
                       JOIN users u ON o.user_id = u.user_id ORDER BY o.order_date DESC""")
    orders = cur.fetchall()
    cur.close()
    return render_template('admin/orders.html', orders=orders,
                           status_filter=status_filter, admin=session.get('admin_name'))

@app.route('/admin/order/<int:order_id>/update', methods=['POST'])
@admin_required
def update_order_status(order_id):
    data = request.get_json()
    new_status = data.get('status')
    valid_statuses = ['Pending', 'In Review', 'In Progress', 'Testing', 'Completed', 'Cancelled']
    if new_status not in valid_statuses:
        return jsonify({'success': False})
    cur = mysql.connection.cursor()
    if new_status == 'Completed':
        cur.execute("UPDATE orders SET tracking_status = %s, order_complete_date = NOW() WHERE order_id = %s",
                    (new_status, order_id))
    else:
        cur.execute("UPDATE orders SET tracking_status = %s WHERE order_id = %s", (new_status, order_id))
    mysql.connection.commit()
    cur.close()
    return jsonify({'success': True})

@app.route('/admin/users')
@admin_required
def admin_users():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT u.*, COUNT(o.order_id) as order_count FROM users u
                   LEFT JOIN orders o ON u.user_id = o.user_id GROUP BY u.user_id ORDER BY u.user_id DESC""")
    users = cur.fetchall()
    cur.close()
    return render_template('admin/users.html', users=users, admin=session.get('admin_name'))

@app.route('/api/check-email', methods=['POST'])
def check_email():
    email = request.get_json().get('email', '').lower()
    cur = mysql.connection.cursor()
    cur.execute("SELECT user_id FROM users WHERE email = %s", (email,))
    exists = cur.fetchone() is not None
    cur.close()
    return jsonify({'exists': exists})

if __name__ == '__main__':
    app.run(debug=True)
