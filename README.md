# MERN-login-page
  A MERN stack login system:

**Project Description:**  
This **MERN Stack Login System** is a secure and built with MongoDB, Express.js, React, and Node.js. It features **user authentication**, and a responsive UI designed with **Material-UI**. The frontend includes **Formik & Yup validation**, loading states, and error handling, while the backend provides protected API routes with **CORS security**. Ideal for developers looking to integrate a ready-to-use login system, this project follows best practices for security and scalability. Easily customizable, it supports future expansions like **social login**. Deploy it as a standalone auth service or integrate it into larger applications.  

## Features ✨
- **Modern UI**
  - Responsive design with Material-UI
  - Form validation using Formik + Yup
  - Loading states and error handling
- **Security**
  - Protected routes
  - Environment variables for sensitive data
  - CORS protection

## Tech Stack 🛠️
| Layer        | Technology           |
|--------------|---------------------|
| **Frontend** | React 18, Material-UI, Formik, Yup, Axios |
| **Backend**  | Node.js, Express, MongoDB, Mongoose |
| **Auth**     | JSON Web Tokens (JWT), bcryptjs |
| **DevOps**   | Git, GitHub, dotenv |

## Project Structure 📁
```
mern-login-app/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Auth components
│   │   ├── services/    # API services
│   │   └── App.js       # Main router
│
├── backend/             # Node.js backend
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Express server
```

## Installation 🚀
### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/your-username/mern-login-app.git
cd mern-login-app

# Backend setup
cd backend
npm install
cp .env.example .env  # Update with your credentials

# Frontend setup
cd ../client
npm install

# Run both servers (in separate terminals)
# Terminal 1 (backend):
cd backend && npm start

# Terminal 2 (frontend):
cd client && npm start
```

## Configuration ⚙️
Create `.env` in `/backend`:
```env
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_secure_secret_here
PORT=5000
```
