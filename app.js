const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {
  getAllTodosController,
  addTodoController,
} = require("./Controllers/todoController");
const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(bodyParser.json());

// const userController = require("./controllers/userController")(connection);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

//users routes
app.use("/users", userRoutes);

// Route for getting all todos
app.get("/todos", getAllTodosController);

// Route for adding a todo
app.post("/todos", addTodoController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
