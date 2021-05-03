import { request } from 'graphql-request'
import {  RecipesQuery, 
          RecipesByFilterQuery, 
          RecipeByIdQuery, 
          bettersQuery, 
          worstesQuery} from './queries'

const URL = 'http://localhost:4000/graphql';

const RecipeList = () => {
  request(URL, RecipesQuery).then((data) => console.log(data))
}

const RecipeListByFilter = (filter) => {
  request(URL, RecipesByFilterQuery(filter)).then((data) => console.log(data))
}

export {RecipeList, RecipeListByFilter};


