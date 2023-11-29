import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./components/task";
import AddTask from "./components/addTask";
import UpdateTask from "./components/updateTask";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
