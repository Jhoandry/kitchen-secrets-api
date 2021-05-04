import { request } from 'graphql-request'
import {  RecipesQuery, 
          RecipesByFilterQuery, 
          RecipeByIdQuery, 
          BettersQuery, 
          WorstesQuery} from './queries'
import { sendScore } from './mutations'

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

const sendScoreById = (id, score) => {
  return request(URL, sendScore(id, score))
}

export {  recipeList, 
          recipeListByFilter,
          recipeById,
          getBetters,
          getWorstes,
          sendScoreById };


