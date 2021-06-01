const { users } = require('../database/data');

const resolvers = {
  Query: {
    user: (parent, { id }, context) => {
      return users.filter((user) => user.id === id)[0];
    },
  },
};

module.exports = resolvers;
