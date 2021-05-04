import { request } from 'graphql-request'
import {  RecipesQuery, 
          RecipesByFilterQuery, 
          RecipeByIdQuery, 
          BettersQuery, 
          WorstesQuery} from './queries'

const URL = 'http://localhost:4000/graphql';

const recipeList = () => {
  return request(URL, RecipesQuery)
}

const recipeListByFilter = (filter) => {
  return request(URL, RecipesByFilterQuery(filter))
}

const recipeById = (id) => {
  return request(URL, RecipeByIdQuery(id))
}

const getBetters = () => {
  return request(URL, BettersQuery)
}

const getWorstes = () => {
  return request(URL, WorstesQuery)
}

export {  recipeList, 
          recipeListByFilter,
          recipeById,
          getBetters,
          getWorstes };


