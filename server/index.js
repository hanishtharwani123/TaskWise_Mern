require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const taskModel = require("./models/schema");
require("./db/connect");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://task-wise-mern-frontend.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/get", async (req, res) => {
  try {
    const getTask = await taskModel.find({});
    res.send(getTask);
  } catch (err) {
    console.log(err);
  }
});

app.get("/take/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const taskGet = await taskModel.findById({ _id: id });
    res.send(taskGet);
  } catch (err) {
    console.log(err);
  }
});

app.put("/updat/:id", (req, res) => {
  const id = req.params.id;
  taskModel
    .findByIdAndUpdate(
      { _id: id },
      {
        task: req.body.task,
      }
    )
    .then(() => {
      res.json("updated");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  taskModel
    .findByIdAndDelete({ _id: id })
    .then(() => {
      res.json("Deleted");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

app.post("/post", async (req, res) => {
  try {
    const task_info = new taskModel({
      task: req.body.task,
    });
    const createTask = await task_info.save();
    console.log(createTask);
    res.send(createTask);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
