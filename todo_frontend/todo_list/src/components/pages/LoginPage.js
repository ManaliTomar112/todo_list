import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const user = await authService.login(username, password);
      dispatch(setUser(user));
      console.log("login--->", user);
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user.user));
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid name or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "20px",
        }}
      >
        <h2>Login</h2>
        <input
          style={{
            padding: "10px",
            border: "2px outset",
          }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            border: "2px outset",
          }}
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            padding: "10px",
            width: "100px",
            borderRadius: "50px",
            background: "blue",
            border: "0",
            fontSize: "16px",
            color: "#ffff",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default LoginPage;
