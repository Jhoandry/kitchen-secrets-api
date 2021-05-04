import React, { useState, useEffect } from "react";
import "./index.css"
import { Container, Form, FormControl } from 'react-bootstrap'
import { recipeList } from './../../client/execution'
import RecipeList from './../recipeList/index'

const Search = () => {

  const [recipes, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const recipesFiltered = recipes.filter( (element) => 
                element.name.toLowerCase().includes(search.toLowerCase()));

  useEffect((filter) => {
    setLoading(true);
    recipeList(filter)
      .then((data) => {
        setLoading(false);
        console.log(data.findAllRecipes);
        setList(data.findAllRecipes);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
    <div>
      <Container>
        <Form inline>
          <FormControl  type="text" className="search-input mr-sm-2" 
                        placeholder="Find kitchen Recipe" 
                        onChange={ filter => setSearch(filter.target.value) }/>
        </Form>
        { loading? 
            <pr> Loading data...</pr> :
            <RecipeList recipes={recipesFiltered}/>
        }
      </Container>
    </div>
    </>
  );
};

export default Search