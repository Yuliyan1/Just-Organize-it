import { useState } from "react";
import { Category as CategoryType } from "./category";
import Category from "./CategoryItem";
import "./CategoryList.css";

function CategoryList() {
  const [categories, setCategories] = useState<CategoryType[]>([
    { name: "School" },
    { name: "Work" },
    { name: "Home" },
    { name: "Hobbies" },
    { name: "Other" },
  ]);

  return (
    <div className="CategoryList">
      <ul>
        {categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
