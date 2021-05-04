import React from 'react'
import "./index.css"
import {Container} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

const RecipeList = (data) => {
  console.log(data);
  return (
    <>
    <div>
        <Table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {/* {!!data ? data.recipes.map((recipe) => { 
              console.log(recipe);
            }) : <></>} */}
          </tbody>
        </Table>
    </div>
    </>
  );
};

export default RecipeList