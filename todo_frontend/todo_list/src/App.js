import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MainPage from "./components/pages/MainPage";
import UpdateTask from "./components/updateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<RegisterPage />} />
            <Route path="/list" element={<TaskList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
