const { ObjectId } = require("mongodb");
const taskModal = require("../models/task");
const { findByIdAndDelete } = require("../models/user");

const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const { task, description, category, dueDate, completed, userId } =
      req.body;
    const tasks = new taskModal({
      task,
      description,
      category,
      dueDate,
      status: completed,
      userId,
    });
    await tasks.save();
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Task creation failed" });
  }
};

const deleteTask = async (req, res) => {
  console.log(req.params.id);
  try {
    let task = await taskModal.findByIdAndDelete({ _id: req.params.id });
    console.log("taskdelete-->", task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "somthing went wrong" });
  }
};

const findTaskById = async (req, res) => {
  console.log(req.params.id);
  try {
    let task = await taskModal.find({ _id: req.params.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "somthing went wrong" });
  }
};

const getTask = async (req, res) => {
  try {
    let task = await taskModal.find();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "somthing went wrong" });
  }
};

module.exports = { createTask, deleteTask, findTaskById, getTask };
