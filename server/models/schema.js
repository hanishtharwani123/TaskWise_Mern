const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: String,
});

const taskModel = new mongoose.model("tasks", taskSchema);
module.exports = taskModel;
