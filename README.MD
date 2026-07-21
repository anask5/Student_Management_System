# 🎓 Student Management System

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A full-stack Student Management System built using the MERN stack with secure JWT authentication and role-based authorization.

</div>

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- Secure Logout
- JWT Authentication
- HTTP-only Cookies
- Password Hashing with bcrypt

### 🛡 Authorization
- Authentication Middleware
- Teacher/Admin Protected Routes
- Role-Based Access Control

### 👨‍🎓 Student Management
- Add Student
- View Students
- Update Student
- Delete Student
- Student Information Management

### Teacher Login

- Email: admin@example.com
- Password: admin123

### ⚛ Frontend
- Responsive React UI
- Fetch API Integration
- React Router
- Protected Navigation
- Dynamic Navbar
- Modern Glassmorphism Design

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- JavaScript
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT
- bcrypt
- cookie-parser

---

## 📂 Project Structure

```
Student-Management-System/
│
├── client/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── App.jsx
│
├── server/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
└── README.md
```

---

## 🚀 API Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/register` | Register User |
| POST | `/api/login` | Login User |
| POST | `/api/logout` | Logout User |
| GET | `/api/me` | Verify User |
| POST | `/api/addStudent` | Add Student |
| GET | `/api/getStudents` | View Students |
| PUT | `/api/updateStudent/:id` | Update Student |
| DELETE | `/api/deleteStudent/:id` | Delete Student |

---

## 🔒 Authentication Flow

```
React
   │
   ▼
Express API
   │
   ▼
JWT Generation
   │
   ▼
HTTP-only Cookie
   │
   ▼
Browser
   │
   ▼
Protected Routes
```

---

## 📸 Screenshots

| Register | Login |
|----------|-------|
| <img src="https://i.ibb.co/YJ4fx87/image.png" width="600"> | <img src="https://i.ibb.co/4nnY0f3M/image.png" width="600"> |

| Dashboard | Students |
|-----------|----------|
| <img src="https://i.ibb.co/Kc1kjf64/image.png" alt="dashboard" width="600">  | <img src="https://i.ibb.co/tTbmnt0h/image.png" width="600"> |

---

## 💻 Installation

```bash
git clone https://github.com/anask5/student-management-system.git

cd student-management-system
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📌 Future Improvements

- Search Students
- Dashboard Analytics
- Pagination
- Email Verification
- Forgot Password
- Dark Mode
- Deployment

---

## 👨‍💻 Authors

**Anas Khan**
GitHub: https://github.com/anask5
LinkedIn: https://linkedin.com/anaskhan-cs

**Suryansh Kashav**
GitHub: https://github.com/SKCharlie-17
LinkedIn: www.linkedin.com/in/suryansh-kashav

---

⭐ If you found this project useful, consider giving it a star!
