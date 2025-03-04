**Week 4: MERN Stack Integration Project**

**Objective:**

- Develop a full-stack web application using the MERN stack.
- Apply backend and frontend integration skills.
- Practice RESTful API development and consumption.
- Implement CRUD operations and proper project structuring.

# 📝 Task Manager (MERN Stack)

A simple and efficient Task Manager built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to help you create, manage, and track tasks seamlessly.

---

## 🚀 Features
- ✅ **Task Management- Add, Edit, Delete and mark tasks as completed.**
- 📅 **Set Due Dates for Tasks**
- 📧 **Automated Email Reminders for Tasks**
- 🏷 **Task Status: Pending, In Progress, Completed**
- 🔍 **User-friendly- Built with Material UI for a sleek and responsive design.**
- ✅ **Real-time Updates - Changes are reflected instantly.**
- 🌐 **Fully Responsive Design**

---

## 📌 Tech Stack

| Technology  | Purpose |
|-------------|---------|
| MongoDB     | Database |
| Express.js  | Backend API |
| React.js    | Frontend UI |
| Node.js     | Server |
| Material UI | Styling |
| Axios       | HTTP requests|
| Vercel      | Deployment(Frontend)|
| Render      | Deployment(Backend) |
|Nodemailer   | email reminders |

---
📂 Folder Structure

Task-Manager/
│-- backend/              # Express.js API
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   ├── config/          # Database connection
│   ├── server.js        # Main server file
│-- frontend/             # React.js UI
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Main pages
│   │   ├── App.js       # App entry point
│   │   ├── index.js     # React root file
│-- README.md


---
## 📩 Email Reminder Implementation

Our To-Do List includes an automated email reminder system that notifies users about upcoming deadlines. This is powered by Nodemailer, which triggers reminders based on task due dates. Users receive email notifications to help them stay on track with their tasks.

---
## 🎯 Getting Started

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/PLP-Full-Stack-Development-MERN/week-4-integrating-the-mern-stack-SagwaM.git
$ cd task-manager
```

### 2️⃣ Backend Setup (Express + MongoDB)
```sh
$ cd backend
$ npm install  # Install dependencies
$ npm run dev     # Run server
```
### 3️⃣ Create a .env file and add your MongoDB connection string and email credentials:
```sh
$ MONGO_URI=your_mongo_uri
$ PORT=your_port
$ EMAIL_USER=your_email@example.com
$ EMAIL_PASS=your_email_password
```
- Default server runs on `http://localhost:5001`.

### 4️⃣ Frontend Setup (React + Tailwind CSS)
```sh
$ cd frontend
$ npm install  # Install dependencies
$ npm run dev      # Start development server
```
- React app runs on `http://localhost:5174`.

---

## 🔗 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | `/api/tasks/` | Fetch all tasks |
| POST   | `/api/tasks/` | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🌍 Deployment

### ☁️ Backend Deployment on Render
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/), create a new **Web Service**.
3. Connect your GitHub repo and deploy with Node.js runtime.
4. Choose the backend folder and set the build command:
```sh
$ npm install  
```
5. Set Start Command:
```sh
$ npm run dev
```

5. Set Environment Variables (MongoDB URL, PORT, email credentials.).

6. Deploy and get the API URL.

### 🎨 Frontend Deployment on Vercel
1. Push your frontend code to GitHub.
2. Go to [Vercel](https://vercel.com/), create a new project.
3. Choose the frontend folder.
4. Set Build Command:
```sh
$ npm install && npm run build
```
5. Set output directory:
```sh
$ dist
```
6. Set Environment Variables (API URL from Render).
7. Deploy and get the live frontend URL.

|Final Step: Update the frontend API_URL to use the deployed backend.

---

## 🎯 To-Do List (Future Enhancements)
- 🔹 Add authentication (JWT, OAuth)
- 🔹 Task Categories (Work, Personal, Urgent, etc.)
- 🔹 Implement notifications & Reminders for due tasks
- 🔹 Add drag-and-drop task prioritization

---
## 👨‍💻 Author

SagwaM – GitHub

---
## 🙌 Contributing
Feel free to fork this repo, make enhancements, and create a pull request. Contributions are welcome! 🚀

---

## 📜 License
MIT License © 2025

