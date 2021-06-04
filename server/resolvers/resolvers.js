const {
  users,
  generalSettings,
} = require('../database/data');

const resolvers = {
  Query: {
    user: (parent, { id }, context) => {
      return users.filter((user) => user.id === id)[0];
    },
    generalSettings: () => generalSettings,
  },
};

module.exports = resolvers;
