# NEXARYA — Full Stack Website

## Tech Stack
- **Backend:** Python Flask
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript (no framework, pure dark neon design)

---

## Project Structure
```
nexarya/
├── app.py                  # Main Flask application
├── schema.sql              # MySQL database schema + seed
├── requirements.txt
├── static/
│   ├── css/main.css        # Global styles
│   ├── js/main.js          # Canvas, cursor, animations
│   └── img/                # Co-founder photos go here
│       ├── mahesh.jpg
│       ├── sheel.jpg
│       ├── bhupesh.jpg
│       └── pravin.jpg
└── templates/
    ├── base.html           # Shared navbar/footer/canvas
    ├── index.html          # Homepage
    ├── about.html          # About + co-founders
    ├── services.html       # Services (5 sections)
    ├── portfolio.html      # 6 projects
    ├── pricing.html        # 3 plans + FAQ
    ├── blog.html           # 6 articles
    ├── contact.html        # Contact form
    ├── login.html          # User login
    ├── register.html       # User registration
    ├── dashboard.html      # User order dashboard
    ├── place_order.html    # Order placement form
    ├── order_detail.html   # Order tracking page
    └── admin/
        ├── login.html      # Admin login
        ├── base_admin.html # Admin sidebar layout
        ├── dashboard.html  # Admin KPIs + recent orders
        ├── orders.html     # All orders + status update
        └── users.html      # All registered users
```

---

## Setup Instructions

### 1. Install dependencies
```bash
pip install -r requirements.txt
```

### 2. Setup MySQL database
```bash
mysql -u root -p < schema.sql
```

### 3. Generate admin password hash
```bash
python3 -c "import bcrypt; print(bcrypt.hashpw(b'YOUR_PASSWORD', bcrypt.gensalt()).decode())"
```
Then update the hash in `schema.sql` and re-run, or UPDATE directly:
```sql
UPDATE admins SET password_hash='YOUR_HASH' WHERE username='nexarya_admin';
```

### 4. Configure app.py
Edit these lines in `app.py`:
```python
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
app.secret_key = 'change_this_to_something_secret'
```

### 5. Add co-founder photos
Place photos in `static/img/`:
- `mahesh.jpg` — Mahesh Nage (CEO)
- `sheel.jpg` — Sheel Nikalje (CTO)
- `bhupesh.jpg` — Bhupesh Mukane (Backend Lead)
- `pravin.jpg` — Pravin Epili (Frontend Lead)
Recommended: 400×400px square, any format (.jpg/.png/.webp)

### 6. Run the app
```bash
python app.py
```
Visit: http://localhost:5000

---

## Database Tables

### `admins` (Table 1)
| Column | Type | Notes |
|--------|------|-------|
| admin_id | INT PK AUTO | |
| username | VARCHAR(50) UNIQUE | |
| email | VARCHAR(150) UNIQUE | |
| password_hash | VARCHAR(255) | bcrypt |
| created_at | DATETIME | |

### `users` (Table 2)
| Column | Type | Notes |
|--------|------|-------|
| user_id | INT PK AUTO | |
| name | VARCHAR(100) | |
| email | VARCHAR(150) UNIQUE | **1 email = 1 user** |
| password_hash | VARCHAR(255) | bcrypt |
| phone | VARCHAR(15) | |
| created_at | DATETIME | |

### `orders` (Table 3)
| Column | Type | Notes |
|--------|------|-------|
| order_id | INT PK AUTO | |
| user_id | INT FK | → users |
| order_domain | VARCHAR(200) | What they want built |
| details | TEXT | Project description |
| user_location | VARCHAR(200) | City/state |
| plan_selected | ENUM | Basic/Standard/Premium |
| tracking_status | ENUM | Pending→Completed |
| order_date | DATETIME | Auto on insert |
| order_complete_date | DATETIME | Set when Completed |

---

## User Flow
1. **Browse** any page — no login required
2. Click **Get a Quote / Place Order** → prompted to login/register
3. **Register** with name, email (unique), phone, password
4. **Place order** with project domain, description, location, plan
5. **Dashboard** shows all orders with status tracking

## Admin Panel
- URL: `/admin/login`
- Default username: `nexarya_admin`
- Update password hash in schema.sql before production

---

## Deployment (Vercel/Railway/Render)
1. Set environment variables for MySQL credentials
2. Use `gunicorn app:app` as start command
3. Configure MySQL connection string

