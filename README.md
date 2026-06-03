# 🏥 CareConnect — Doctor Appointment Booking System

> A full-stack web app that lets patients find and book appointments with doctors, complete with an AI chatbot, real-time updates, and automated email confirmations.

---

## ✨ Features

- 🔐 **Firebase Authentication** — Secure sign up / login for patients and doctors
- 📅 **Smart Booking Flow** — Date & time picker with real-time slot availability via Firestore
- 🤖 **AI Chatbot** — Guided appointment booking assistant powered by `react-chatbot-kit`
- 📧 **Email Confirmations** — Automated booking emails via Express + Nodemailer backend
- 👩‍⚕️ **Doctor Dashboard** — Manage schedule, view upcoming appointments, update availability
- 🧑‍💻 **Patient Dashboard** — Book, view, and cancel appointments in one place
- 📱 **Responsive UI** — Works across desktop and mobile

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, React Router, CSS |
| Backend | Node.js, Express |
| Database | Firebase Firestore |
| Auth | Firebase Authentication |
| Email | Nodemailer |
| Chatbot | react-chatbot-kit |
| Date/Time | react-datepicker, react-time-picker |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A Firebase project with Firestore and Authentication enabled
- A Gmail account (or SMTP server) for Nodemailer

### Installation

```bash
# Clone the repo
git clone https://github.com/prakritipatkar/CareConnect.git
cd CareConnect

# Install frontend dependencies
npm install

# Start the frontend
npm start
```

### Backend Setup

```bash
cd backend
npm install

# Create a .env file
cp .env.example .env
# Fill in your Firebase credentials and email config

node server.js
```

### Environment Variables

Create a `.env` file in `/backend`:

```
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password
FIREBASE_API_KEY=...
FIREBASE_PROJECT_ID=...
```

---

## 📁 Project Structure

```
CareConnect/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Patient & Doctor dashboard pages
│   ├── chatbot/          # AI chatbot config & responses
│   └── firebase.js       # Firebase initialization
├── backend/
│   └── server.js         # Express server + Nodemailer
├── public/
└── package.json
```

---

## 📸 Screenshots

> _Add screenshots here once available_

---

## 🔮 Future Improvements

- [ ] SMS notifications via Twilio
- [ ] Doctor ratings and reviews
- [ ] Video consultation integration
- [ ] Admin panel for clinic management

---

## 👩‍💻 Author

**Prakriti Patkar** — [LinkedIn](https://www.linkedin.com/in/prakriti-patkar-33125b228) · [GitHub](https://github.com/prakritipatkar)
