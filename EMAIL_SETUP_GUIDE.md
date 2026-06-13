# Email Configuration Setup Guide for Nexarya

## Overview
The website now has a working contact form system that sends emails directly to **coderangers04@gmail.com**. All form submissions (Project Inquiry, Help, Complaint, General Inquiry) are handled by a backend Flask route.

## What Was Updated

### 1. **Backend (app.py)**
- Added Flask-Mail import and configuration
- Created `/send-inquiry` endpoint to handle all contact form submissions
- Emails are sent using Gmail SMTP

### 2. **Frontend (contact.html)**
- Removed EmailJS dependency (no more third-party email service needed)
- Updated all forms to use the backend `/send-inquiry` endpoint
- Contact information shows: 
  - Email: coderangers04@gmail.com
  - Phone: +91 93736 19831

### 3. **Dependencies (requirements.txt)**
- Added `Flask-Mail==0.9.1`

### 4. **Environment Configuration (.env)**
- Added email configuration for Gmail SMTP

## Setup Instructions

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Configure Gmail App Password

Since Gmail has disabled "Less Secure Apps", you need to use an **App Password**:

1. Go to https://myaccount.google.com/
2. Click **Security** in the left menu
3. Enable 2-Step Verification (if not already enabled)
4. Go back to **Security**, find **App passwords**
5. Select **Mail** and **Windows Computer** (or your platform)
6. Google will generate a 16-character password
7. Copy this password

### Step 3: Update .env File

Open `.env` and replace the email password:

```
MAIL_PASSWORD=your_16_character_app_password_here
```

Example:
```
MAIL_PASSWORD=abcd efgh ijkl mnop
```

### Step 4: Run the Application

```bash
python app.py
```

Test the forms on:
- **Project Form**: `/contact` page (main form)
- **Help/Complaint/Inquiry**: `/contact` page (Help Center section)

## Form Details

### Contact Form (Top Section)
- Name, Email, Phone, Service Selection, Message
- Sent as "Project Inquiry"

### Help Center (Three Tabs)

**1. Help Request**
- For customers with issues
- Email, Subject, Issue Description
- Type: "Help Request"

**2. File a Complaint**
- For quality/delivery issues
- Email, Subject, Complaint Details
- Type: "Complaint"

**3. General Inquiry**
- For questions about services
- Email, Subject, Message
- Type: "General Inquiry"

## Email Template

All emails arrive in this format:

```
[Email Type] Subject from customer

From: Customer Name
Email: customer@email.com
Type: [Help Request / Complaint / General Inquiry]

Message:
[Customer's message body]

---
For Project Inquiries, also includes: Phone, Service Selected
```

## Troubleshooting

### "Failed to send" Error
- Check that Gmail 2-Factor Authentication is enabled
- Verify App Password is correct in .env
- Make sure you're using the 16-character app password (not your regular Gmail password)
- Check MAIL_USERNAME matches the Gmail account

### Email not received
- Check spam/promotions folder
- Verify coderangers04@gmail.com can send from itself
- Check Flask logs for error messages

### Development Testing
For local testing without actual email sending, you can set `MAIL_DEBUG=True` and use a test email backend. But for production, Gmail SMTP is configured and ready.

## Services & Pricing Reference

**5 Services Offered:**
1. Website Development (₹10K)
2. Custom Web Applications (₹15K base)
3. AI Chatbot Integration (Add-on)
4. Cloud Hosting & Maintenance (₹25K base)
5. Web Testing (Add-on)

**Custom Quote Note:**
All prices are starting points. Customers can request custom quotes based on their specific requirements. Forms make it easy for them to describe their needs.
