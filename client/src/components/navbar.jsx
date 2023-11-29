import React from "react";
import "../styles/navbar.css";

const navbar = () => {
  return (
    <>
      <nav>
        <h1 className="logo">TaskWise</h1>
        <button className="add_task">Add Task</button>
      </nav>
    </>
  );
};

export default navbar;
