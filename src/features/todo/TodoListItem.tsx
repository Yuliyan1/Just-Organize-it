import { Todo } from "./todo";

interface Props {
  todo: Todo;
  toggleTodo: (index: number) => void;
  index: number;
}

function TodoListItem({ index, todo, toggleTodo }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(index)}
      />
      {todo.text}
    </li>
  );
}

export default TodoListItem;
