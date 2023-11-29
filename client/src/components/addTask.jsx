import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/addTask.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";

const addTask = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/post`, { task })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container1">
        <Navbar />
        <div className="contain1">
          <div className="about1">
            <h1 className="tagline1">
              Unleash your productivity by typing your tasks, turning thoughts
              into actionable goals.
            </h1>
            <form onSubmit={handle} className="form">
              <input
                type="text"
                name="task"
                id="task"
                placeholder="Type your task here..."
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                value={task}
              />
              <div className="btn1">
                <button type="submit" className="add_task_btn1">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default addTask;
