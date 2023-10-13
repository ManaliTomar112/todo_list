import React from "react";
import TaskForm from "../taskform";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function MainPage() {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={LogOut}>
              LogOut
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Task List</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default MainPage;
