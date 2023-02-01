import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "./todo";
import TodoEmpty from "./TodoEmpty";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const localData = localStorage.getItem(id || "");
    setTodos(localData ? JSON.parse(localData) : []);
  }, [id]);

  if (!id) {
    return <TodoEmpty />;
  }

  function addTodo() {
    const newTodos = [...todos, { text: input, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem(id || "todos", JSON.stringify(newTodos));
    setInput("");
  }

  function toggleTodo(index: number) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
    localStorage.setItem(id || "todos", JSON.stringify(newTodos));
  }

  const uncompletedTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="TodoList">
      <h1>{id.charAt(0).toUpperCase() + id.slice(1)} List</h1>
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
