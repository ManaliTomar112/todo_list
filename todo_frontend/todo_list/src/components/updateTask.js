import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/actions/taskActions";
import { useForm } from "react-hook-form";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest, getRequestById, postRequest } from "./utils/api";

function UpdateTask() {
  const { id } = useParams();
  console.log("///--->", id);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getTaskByID();
  }, []);

  const handleAddTask = async (value) => {
    console.log(value);
    const res = await postRequest("/", value);
    dispatch(addTask(res));
    reset();
  };

  const getTaskByID = async () => {
    const res = await getRequest(`/${id}`);
    console.log("getTaskByID====>", res);
    setValue("task", res.title);
    setValue("description", res.description);
    setValue("category", res.category);
    setValue("dueDate", res.dueDate);
    dispatch(addTask(res));
    reset();
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit(handleAddTask)}
    >
      <TextField
        style={{ margin: 10 }}
        label=" task"
        {...register("task", {
          required: {
            value: true,
            message: "task is Required",
          },
        })}
        error={!!errors.task}
        helperText={errors?.task?.message}
      />
      <TextField
        style={{ margin: 10 }}
        label=" description"
        type="text"
        {...register("description", {
          required: {
            value: true,
            message: "description is Required",
          },
        })}
        error={!!errors.description}
        helperText={errors?.description?.message}
      />
      <TextField
        style={{ margin: 10 }}
        label="category"
        type="text"
        {...register("category", {
          required: {
            value: true,
            message: "category is Required",
          },
        })}
        error={!!errors.category}
        helperText={errors?.category?.message}
      />
      <TextField
        style={{ margin: 10 }}
        type="Date"
        {...register("dueDate", {
          required: {
            value: true,
            message: "dueDate is Required",
          },
        })}
        error={!!errors.dueDate}
        helperText={errors?.dueDate?.message}
      />

      <div style={{ margin: 5 }}>
        <Button variant="contained" color="success" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
}

export default UpdateTask;
