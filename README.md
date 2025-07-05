# 💬 mini Whatsp — A Learning-Oriented WhatsApp Clone

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/backend-Node.js-brightgreen)
![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen)
![EJS](https://img.shields.io/badge/view-EJS-yellow)

<p align="center">
  <img src="https://github.com/yourusername/mini-whatsp/assets/demo-animation.gif" alt="Mini Whatsp Demo" width="600"/>
</p>

---

## 📌 What is mini Whatsp?

**mini Whatsp** is a lightweight, beginner-friendly **chat application** that mimics WhatsApp's look and feel using:

- 🧠 Express & Node.js backend  
- 📦 MongoDB for data storage  
- 💬 EJS templating for views  
- 🎨 CSS styling inspired by WhatsApp UI  
- 🌐 RESTful routes

> It's a perfect **learning project** for anyone diving into full-stack JavaScript with Node + MongoDB.

---

## 🚀 Features

- ✅ View all chats  
- ✅ Add a new message  
- ✅ Edit existing messages  
- ✅ Delete chats (soft style)  
- ✅ RESTful routing (GET, POST, PUT, DELETE)
- ✅ Connected to MongoDB using **Mongoose**
- ✅ Timestamps: `created_at` and `last_update`
- ✅ WhatsApp-like styling with a custom header & logo
- ✅ Clean modular file structure

---

## 🧠 Tech Stack

| Technology | Role |
|------------|------|
| Node.js + Express | Backend Server |
| MongoDB + Mongoose | Database & ODM |
| EJS | Templating engine |
| HTML/CSS | Frontend styling |
| Method-Override | Enables PUT/DELETE in HTML forms |

---

## 📁 Folder Structure

src/
├── models/
│   └── chat.js                  # Mongoose schema for chat messages
├── public/
│   ├── root.css                 # WhatsApp-inspired global styles
│   └── logo.svg                 # App icon used in the header
├── views/
│   ├── includes/
│   │   └── head.ejs             # Shared <head> partial (meta, styles)
│   ├── index.ejs                # Displays all chats
│   ├── new.ejs                  # Form to create a new chat
│   └── update.ejs               # Form to edit an existing chat
├── index.js                     # Main Express server file
├── package.json                 # Project metadata and dependencies


---

## 🌐 RESTful Routes

| Route              | HTTP Verb | Description            |
|-------------------|-----------|------------------------|
| `/chats`          | GET       | List all chats         |
| `/chats/new`      | GET       | Form to create a chat  |
| `/chats`          | POST      | Create new chat        |
| `/chats/:id/edit` | GET       | Edit form for a chat   |
| `/chats/:id`      | PUT       | Update a chat          |
| `/chats/:id`      | DELETE    | Delete a chat          |

---

## 🛠️ How to Run Locally

1. **Clone the Repo**
   ```bash
   git clone https://github.com/yourusername/mini-whatsp.git
   cd mini-whatsp
   ```
2. **Install Dependencies**
  ```bash
  npm install
  ```
3. **Start MongoDB (if not running)**
  ```bash
  mongod
  ```

4. **Start the App**
  ```bash
  node index.js
  ```

5. **Visit in Browser**
  ```bash
  http://localhost:8080/chats
  ```

## 🔍 Learning Outcomes
- Understand full-stack architecture (MVC)

- Use MongoDB with Mongoose schemas

- Build RESTful routes with Express

- Style using custom CSS like WhatsApp

- Connect backend logic with EJS templating

- Use method-override to simulate PUT/DELETE

- Handle form submissions and redirects

## 📬 Contribution
This is a learning project, but PRs and suggestions are welcome!
If you’re just starting out and want to tweak it, fork and experiment!

## 📄 License
This project is licensed under the MIT License.




