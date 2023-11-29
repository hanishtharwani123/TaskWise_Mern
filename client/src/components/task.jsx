import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/task.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => {
        setTodo(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/deleteUser/" + id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="contain">
          <div className="about">
            <h1 className="tagline">
              Simply click the button to effortlessly add and conquer your
              tasks.
            </h1>
            <div className="btn">
              <Link to="/add" className="add_task_btn">
                Add Task
              </Link>
            </div>
          </div>

          <div className="tasking">
            <div className="show_task">
              <h1 className="your_task">Your To Do Tasks</h1>
              {todo.map((todos) => (
                <div className="task">
                  <h1 className="task_name">{todos.task}</h1>
                  <div className="edit_btn">
                    <Link to={`/update/${todos._id}`}>
                      <button className="task_btn_edit">Edit</button>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(todos._id)}
                      className="task_btn_delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Task;
