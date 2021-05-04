import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

const RecipeList = (data) => {
  if (Array.isArray(data.recipes) && data.recipes.length > 0) {
    return (
      <>
      <div className="list-container">
        <Table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {data.recipes.map((recipe) => {
              return (
                <tr>
                  <td>
                    <Link className="link" to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                  </td>
                  <td>{recipe.averageScore}</td>
                </tr> 
              );
            })}
          </tbody>
        </Table>
      </div>
      </>
    );
  } else {
    return (
      <>
      <div className="list-container">
        <h4>No data Available</h4>
      </div>
      </>);
  }
};

export default RecipeList