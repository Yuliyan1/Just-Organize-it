import { Link } from "react-router-dom";
import { Category as CategoryType } from "./category";
import "./CategoryItem.css";

interface Props {
  category: CategoryType;
}

function Category({ category }: Props) {
  return (
    <div className="CategoryItem">
      <Link to={"/" + category.name.toLowerCase()}>{category.name}</Link>
    </div>
  );
}

export default Category;
