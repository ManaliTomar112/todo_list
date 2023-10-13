const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./dbconnection");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
app.use(express.json());
const port = 5000;
dbConnect("mongodb://0.0.0.0:27017/todolistdb");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
