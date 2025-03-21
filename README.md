# MERN Authentication & Test System

## Overview
This is a full-stack MERN application for user authentication and an MCQ-based test with feedback submission. The project includes user authentication, a role selection feature, a 10-question test, emoji-based feedback, and a responsive UI.

## Features
- User Authentication (Register/Login with Mobile Number & Password)
- JWT Token-based Authentication
- User Role Selection (Student/Employee)
- MCQ-based Test Submission (10 Questions, 5 marks each)
- Total Marks Calculation & Display
- Emoji-based Feedback System
- Responsive UI using Tailwind CSS
- MERN Stack with RESTful APIs
- MongoDB Storage

## Tech Stack
### Client (React.js)
- React.js (UI)
- Vite (Faster build)
- Tailwind CSS (Styling)
- React Router (Navigation)
- Form Validation (Formik/Yup)
- Axios for API requests
- TanStack Query (React Query for data fetching and state management)

### Server (Node.js + Express.js)
- Express.js (RESTful APIs)
- MongoDB with Mongoose
- JWT Authentication
- bcrypt.js (Password Hashing)
- CORS & dotenv (Security)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```

3. Install dependencies:
   ```sh
   # Server
   cd server
   npm install
   
   # Client
   cd client
   npm install
   ```

4. Run the application:
   ```sh
   # Start Server
   cd server
   npm run dev  # OR npm start
   
   # Start Client
   cd client
   npm run dev
   ```

## Deployment
- **Client**: Deployed on Vercel
- **Server**: Deployed on Render
- **Database**: MongoDB Atlas

## Folder Structure
```
project-folder/
│── server/         # Node.js + Express.js Backend
│── client/         # React.js Frontend
│── README.md       # Project Documentation
```

## Contributions
Feel free to fork this project and submit pull requests for improvements.

## License
This project is open-source and free to use.

## Author
Mohammed Salih K

