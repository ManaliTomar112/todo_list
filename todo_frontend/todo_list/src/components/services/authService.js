import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  },
  register: async (username, password, userMail) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username,
        password,
        userMail,
      });
      if (response.status === 201) return response.data;
    } catch (error) {
      throw new Error("Registration failed");
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(`${API_URL}/logout`);
      console.log(response);
    } catch (error) {
      throw new Error("Logout failed");
    }
  },
};

export default authService;
