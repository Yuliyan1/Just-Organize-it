import { useEffect, useState } from "react";
import { Todo } from "./todo";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("todos");
    setTodos(localData ? JSON.parse(localData) : []);
  }, []);

  function addTodo() {
    const newTodos = [...todos, { text: input, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setInput("");
  }

  function toggleTodo(index: number) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const uncompletedTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      <p>Uncompleted Todos: {uncompletedTodos}</p>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem todo={todo} toggleTodo={toggleTodo} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
