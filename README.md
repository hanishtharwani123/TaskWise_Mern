# TaskWis

TaskWise is a task management web application developed using the MERN stack, allowing users to create, read, update, and delete tasks seamlessly.

## Features

- **Create:** Easily add new tasks to your list.
- **Read:** View your task list and stay organized.
- **Update:** Edit and modify existing tasks.
- **Delete:** Remove tasks you no longer need.

## Technologies Used

- **Frontend:** React.js (created using Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **State Management:** Redux (or any other state management tool you used)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or on MongoDB Atlas

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/TaskWise.git
   cd TaskWise

   ```

2. **Install dependencies:**

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up MongoDB:**

   - Ensure your MongoDB server is running or create a MongoDB Atlas account.
   - Update the MongoDB connection string in `server/config/db.js` with your connection details.

4. **Run the application:**

   ```bash
   # Run the server
   cd ../server
   npm start

   # Run the client
   cd ../client
   npm run dev
   ```

   The application should now be accessible at `http://localhost:3000`.

## API Endpoints

The server provides the following API endpoints:

- **GET /tasks:** Get a list of all tasks.
- **GET /tasks/:id:** Get details of a specific task.
- **POST /tasks:** Create a new task.
- **PUT /tasks/:id:** Update details of a specific task.
- **DELETE /tasks/:id:** Delete a specific task.

Example: To get all tasks, make a GET request to `http://localhost:5000/tasks`.


## Screenshots

Include screenshots or GIFs showcasing your application here.

![Screenshot 2023-11-30 002456](https://github.com/hanishtharwani123/TaskWise_Mern/assets/104623869/28a4fcb5-11f5-4c58-a12d-879721bd7c68)
![Screenshot 2023-11-30 002532](https://github.com/hanishtharwani123/TaskWise_Mern/assets/104623869/29c0bf40-e5b6-4098-ac28-a241a873fa37)


## Contributing

Feel free to contribute to TaskWise! Fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

