const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    dueDate: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const taskModal = mongoose.model("Task", taskSchema);
module.exports = taskModal;
