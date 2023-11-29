import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/updateTask.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const updateTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/take/" + id)
      .then((res) => {
        setTask(res.data.task);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updat/" + id, { task })
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
            <form onSubmit={Submit} className="form">
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
                <button className="add_task_btn1">Add Task</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default updateTask;
