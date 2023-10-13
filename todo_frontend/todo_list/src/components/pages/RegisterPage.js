import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const user = await authService.register(username, password, userMail);
      dispatch(setUser(user));
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
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
        <h2>Register</h2>
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
          type="text"
          placeholder="userMail"
          value={userMail}
          onChange={(e) => setUserMail(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            border: "2px outset",
          }}
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
          onClick={handleRegister}
        >
          Register
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default RegisterPage;
