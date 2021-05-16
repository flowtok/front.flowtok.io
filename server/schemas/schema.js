const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Get users array"
    users: [User]
  }
  type User {
    id: ID!
    name: String!
    tagname: String!
    age: Int!
    country: String!
    balance: Float!
  }
`;

module.exports = typeDefs;
