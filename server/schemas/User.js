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
    balance: String!
    avg_views: String!
    price: String!
    good_rate: Float!
    held_money: String!
    total_earnings: String!
    ref_link: String!
    ref_count: Int!
    ref_earnings: String!
  }
`;

module.exports = User;
