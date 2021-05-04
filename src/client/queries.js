import { gql } from 'graphql-request'

const RecipesQuery = gql`
  {
    findAllRecipes {
        _id 
        name
        averageScore
    }
  }
`;

const RecipesByFilterQuery = (filter) => gql`
  {
    findRecipesByName (name : "${filter}") {
      _id 
      name
      averageScore
    }
  }
`;


const RecipeByIdQuery = (id) => gql`
  {
    getDetailByRecipeId (id : ${id}) {
        _id 
        name
        description
        averageScore
        steps {
          description,
          order
        }
        ingredients {
          unit,
          basePortion,
          name
        }
    }
  }
`;

const BettersQuery = gql`
  {
    getBetters {
      _id 
      name
      averageScore
    }
  }
`;

const WorstesQuery = gql`
  {
    getWorstes {
      _id 
      name
      averageScore
    }
  }
`;

export {  RecipesQuery, 
          RecipesByFilterQuery, 
          RecipeByIdQuery, 
          BettersQuery, 
          WorstesQuery };

 