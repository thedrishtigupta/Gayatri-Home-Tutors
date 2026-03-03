# Gayatri Home Tutor

Gayatri Home Tutor is a web-based tutor discovery and booking platform designed to connect students with qualified home tutors.  
The system allows students to browse tutor profiles, explore subjects, submit booking requests, and enables administrators to manage registrations and inquiries efficiently.

This project is being developed as a database-driven web application and will also be used for Software Measurement, Metrics & Modelling (SMMM) and Software Project Management (SPM) analysis.

---

## 🚀 Features

- Student Registration
- Tutor Registration
- Tutor Profile Listings
- Subject-wise Filtering
- Booking / Inquiry Form
- Admin Panel
- Visitor & Form Data Tracking (for analytics and measurement)

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Python (Flask Framework)

### Database
- MySQL

---

## 📂 Project Structure (Planned)

```
gayatri-home-tutor/
│
├── frontend/ # Static frontend files
│ ├── index.html
│ ├── css/
│ ├── partials/
│ ├── assets/
│
├── backend/ # Flask application
│ ├── app.py
│ ├── models/
│ ├── routes/
│ ├── templates/
│ ├── config.py
│
├── database/ # SQL schema & migrations
│
├── README.md

```
---

## ⚙️ Development Setup (Basic)

1. Clone the repository

git clone <repo-link>
cd gayatri-home-tutor


2. Create a virtual environment (recommended)

python -m venv venv
source venv/bin/activate # Mac/Linux
venv\Scripts\activate # Windows


3. Install dependencies

pip install -r requirements.txt


4. Configure MySQL database credentials in `config.py`

5. Run the Flask server

flask run

---

## 👥 Team Collaboration

- All development will be managed via GitHub.
- Feature branches should be created for new modules.
- Avoid pushing directly to `main` without review.

---

## 🌐 Deployment Plan

- Frontend: Hosted on Hostinger
- Backend: Flask API deployment (Render / Cloud platform)
- Database: MySQL

---

## 📌 Status

Frontend - few pages left.
Backend and database integration in progress.