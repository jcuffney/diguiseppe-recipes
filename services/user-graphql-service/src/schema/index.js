const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # User
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  # User Input
  input UserInput {
    firstName: String
    lastName: String
    email: String
  }

  input DeleteInput {
    id: ID!
  }

  # Queries
  extend type Query {
    user(id: ID!): User
  }

  # Mutations
  extend type Mutation {
    createUser(input: UserInput): User
    deleteUser(input: DeleteInput): String
  }
`;

module.exports = {
  typeDefs,
};
