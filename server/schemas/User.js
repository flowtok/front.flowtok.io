const User = `
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

module.exports = User;
