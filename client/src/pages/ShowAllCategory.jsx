import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showAllCategory } from "../services/showAllCategory";

function ShowAllCategory() {
  const [category, setCategory] = useState([]);

  const onShowCategories = async () => {
    const result = await showAllCategory();

    if (result["status"] == "Success") setCategory(result.data);
    else alert("Category not found...");
  };

  return (
    <div>
      <h2 className="page-header" style={{ textAlign: "center" }}>
        All categories
      </h2>
      <br />
      <button
        onClick={onShowCategories}
        type="submit"
        className="btn btn-primary"
      >
        Show all categories
      </button>
      <br />
      <hr />
      <table class="table table-striped m-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {category.map((myCategory, index) => {
            return (
              <tr key={index}>
                <td>{myCategory.id}</td>
                <td>{myCategory.title}</td>
                <td>{myCategory.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to="/menupage">
        <button className="btn btn-primary">Go to menu page...</button>
      </Link>
    </div>
  );
}

export default ShowAllCategory;
