# 💬 mini Whatsp — A Learning-Oriented WhatsApp Chat Feature

<p align="center">
  <strong>A WhatsApp-style chat app built with Node.js, Express, MongoDB, and EJS</strong>
</p>

<p align="center">
  🚀 Learn RESTful APIs · 🧠 Master CRUD · 🎨 WhatsApp-themed UI
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&animation=glitch" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&animation=glitch" alt="Express.js Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&animation=glitch" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/EJS-white?style=for-the-badge&logo=EJS&logoColor=black&animation=glitch" alt="EJS Badge"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&animation=glitch" alt="CSS3 Badge"/>
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

---

### 🛠️ Made With

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-ffffff?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

---

<p align="center">
  Made with ❤️ by Ritesh as a learning project — mini Whatsp 📱
</p>





