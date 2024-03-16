const { getAllTodos, addTodo } = require("../Models/todoModel");

const getAllTodosController = (req, res) => {
  const todos = getAllTodos();
  res.json({ todos });
};

const addTodoController = (req, res) => {
  const { todo } = req.body; //taking request from users
  addTodo(todo); //model
  res.json({ message: "Todo added successfully" });
};

module.exports = { getAllTodosController, addTodoController };
