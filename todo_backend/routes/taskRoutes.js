const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  findTaskById,
  getTask,
} = require("../controllers/taskController");

router.route("/").post(createTask);
router.route("/").get(getTask);
router.route("/:id").get(findTaskById);
router.route("/delete/:id").delete(deleteTask);

module.exports = router;
