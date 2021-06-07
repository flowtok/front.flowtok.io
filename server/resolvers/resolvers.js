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
  Mutation: {
    updateUserName: (parent, { input }, context) => {
      const { id, name } = input;
      users.forEach((user) => {
        if (user.id === id) {
          user.name = name;
        }
      });
      return users.filter((user) => user.id === id)[0];
    },
  },
};

module.exports = resolvers;
