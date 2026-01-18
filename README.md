# PIXOR

Pixor is a full-stack MERN **Text-to-Image Generator** web application that allows users to generate AI images from text prompts using the ClipDrop API.

## 🛠 Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- API: ClipDrop (Text-to-Image)
- Tools: Postman

## ✨ Features
- Text-to-image generation using AI
- Secure backend APIs
- MongoDB Atlas integration
- API testing using Postman
- Responsive UI

## 🚀 Run Locally

### Clone the repository
```bash
git clone https://github.com/PIYOSEE/pixor.git
```

### Backend Setup
cd server
npm install
npm run server

### Frontend Setup
cd client
npm install
npm run dev

### 🔐 Environment Variables

Create a .env file inside the server folder and add your credentials.
Important: Never push your real .env to GitHub. Use the placeholders below for public repos or sharing.

Env
MONGODB_URI = "your_mongodb_connection_string"
JWT_SECRET = "your_jwt_secret"
CLIPDROP_API = "your_clipdrop_api_key"
RAZORPAY_KEY_ID = "your_razorpay_key_id"
RAZORPAY_KEY_SECRET = "your_razorpay_key_secret"
CURRENCY = "INR"

Tip: You can also create a server/.env.example with the same content above. Anyone who clones the project can copy it to .env and add their own credentials.

### 👩‍💻 Author
Piyosee Ghosh
BCA Student | MERN Stack Learner
