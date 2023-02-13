import DigitalClock from "../clock/DigitalClock";
import "./TodoEmpty.css";

function TodoEmpty() {
  return (
    <div className="TodoEmpty">
      <p className="TodoEmpty__Title">Navigate to category</p>
      <DigitalClock />
    </div>
  );
}

export default TodoEmpty;
