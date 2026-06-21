Login Page Node Backend

A simple Node.js backend API for user authentication that validates username and password against a MySQL database and returns user details on successful login.

Features
User authentication API
MySQL database integration using connection pool
Structured error handling
Standard API response format
Async request handling
Tech Stack
Node.js
Express.js
MySQL
JavaScript
Project Structure
LoginPageNodeBackened
│
├── controllers/
├── utils/
├── config/
├── routes/
└── server.js
Installation
git clone https://github.com/haidermb25/LoginPageNodeBackened.git
cd LoginPageNodeBackened
npm install
Run Project
npm start
API Endpoint
POST /login

Body:

{
  "username": "string",
  "password": "string"
}
