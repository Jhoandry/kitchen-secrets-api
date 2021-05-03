import React from 'react'
import "./index.css"
import {Container} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

const RecipeList = (recipes) => {
  return (
    <>
    <div>
      <Container>
        <h2>Kitchen Recipes</h2>
        <Table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </Container>
    </div>
    </>
  );
};

export default RecipeList