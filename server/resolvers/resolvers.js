const { users } = require('../database/data');
const jwt = require('jsonwebtoken');
const { generalSettings } = require('../database/data');
const { JWT_SECRET } = require('../config');

const resolvers = {
  Query: {
    user: () => users[0],
    generalSettings: () => generalSettings,
    login: (parent, { name, password }) => {
      const user = users.find((user) => {
        if (user.name === name && user.password === password) return true;
      });
      const token = jwt.sign(user, JWT_SECRET);
      return { user, token };
    },
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
    payOut: (parent, { input }) => {
      const {type, value} = input;
      if (type && value) return 'success';
    },
  },
};

module.exports = resolvers;
