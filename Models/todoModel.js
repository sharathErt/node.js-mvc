let todos = [];

const getAllTodos = () => {
  return todos;
};

const addTodo = (todo) => {
  todos.push(todo);
};

module.exports = { getAllTodos, addTodo };
