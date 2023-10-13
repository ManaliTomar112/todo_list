import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "./redux/actions/taskActions";
import { deleteRequest, getRequest } from "./utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();
  const [TaskArray, setTaskArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const res = await getRequest(`/`);
    console.log("getTaskByID====>", res);
    setTaskArray(res);
  };

  const toggleCompleted = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = async (taskId) => {
    const result = await deleteRequest(`/delete/${taskId}`);
    console.log(taskId);
    console.log("result====>", result);
    dispatch(deleteTask(taskId));
    navigate("/dashboard");
  };

  console.log("TaskArray--->>", TaskArray);
  return (
    <ul>
      {TaskArray.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : "active"}>
          <span
            style={{
              fontSize: "18px",
            }}
            onClick={() => toggleCompleted(task._id)}
          >
            {task.task}
          </span>
          <span
            style={{
              fontSize: "18px",
            }}
            onClick={() => toggleCompleted(task._id)}
          >
            {task.category}
          </span>
          <span
            style={{
              fontSize: "18px",
            }}
            onClick={() => toggleCompleted(task._id)}
          >
            {task.dueDate}
          </span>
          <button
            style={{
              padding: "8px",
              width: "100px",
              borderRadius: "50px",
              background: "red",
              border: "0",
              fontSize: "16px",
              color: "#ffff",
            }}
            onClick={() => handleDeleteTask(task._id)}
          >
            Delete
          </button>
          <Link to={`/update/${task._id}`}>
            <button
              style={{
                padding: "8px",
                width: "100px",
                borderRadius: "50px",
                background: "green",
                border: "0",
                fontSize: "16px",
                color: "#ffff",
              }}
            >
              update
            </button>
          </Link>

          <Link to={`/dashboard`}>
            <button
              style={{
                padding: "8px",
                width: "100px",
                borderRadius: "50px",
                background: "grey",
                border: "0",
                fontSize: "16px",
                color: "#ffff",
              }}
            >
              Add Task
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
