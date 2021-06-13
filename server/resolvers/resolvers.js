const { users } = require('../database/data');
const jwt = require('jsonwebtoken');
const { generalSettings, savedMethods } = require('../database/data');
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
    wallets: () => savedMethods,
  },
  Mutation: {
    updateUserName: (parent, { input }) => {
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
      if (type && value) return { success: true, message: "Success" };
    },
    addWallet: (parent, { input }) => {
      const {type, value} = input;
      if (type && value) return { type, value };
    }
  },
};

module.exports = resolvers;
