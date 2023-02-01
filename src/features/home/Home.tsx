import CategoryList from "../category/CategoryList";
import Header from "../header/Header";
import TodoList from "../todo/TodoList";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="Content">
        <CategoryList />
        <TodoList />
      </div>
    </div>
  );
}

export default Home;
