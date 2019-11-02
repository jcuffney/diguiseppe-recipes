const { gql } = require('apollo-server');

const typeDefs = gql`
  # Recipe
  type Recipe {
    id: ID!
    title: String
  }

  # Recipe Input
  input RecipeInput {
    title: String
  }

  input DeleteInput {
    id: ID!
  }

  # Queries
  extend type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  # Mutations
  extend type Mutation {
    createRecipe(input: RecipeInput): Recipe
    deleteRecipe(input: DeleteInput): String
  }
`;

module.exports = {
  typeDefs,
};
