import { useState, useEffect } from "react";
import reviews from "../../api/api";
import { Link } from "react-router-dom";
import { parseCategorySlug } from "../../utils/parseCategorySlug";

function ReviewCategoryNav() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    reviews.get("/categories").then(({ data }) => {
      setCategoryData(data);
    });
  }, []);
  return (
    <ul>
      {categoryData.map((category) => {
        return (
          <li key={category.slug}>
            <Link to={`/reviews/category/${category.slug}`}>
              {parseCategorySlug(category.slug)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewCategoryNav;
