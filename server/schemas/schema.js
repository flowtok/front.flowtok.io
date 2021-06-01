const { gql } = require('apollo-server');
const User = require('./User');
const Task = require('./Task');

const typeDefs = gql`
  ${User}
  ${Task}
`;

module.exports = typeDefs;
