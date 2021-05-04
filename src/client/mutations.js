import { gql } from 'graphql-request'

const sendScore = (id, score) => gql`
  mutation {
    sendScore(id : ${id}, score: ${score}) {
        _id 
        name
        description
        averageScore
        curiosities
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

export { sendScore }
 