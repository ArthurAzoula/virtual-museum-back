const { GraphQLList } = require('graphql');

const getUsers = {
  type: new GraphQLList(require('../types/User.type')),
  resolve: () => {
    return [{
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Mary',
      email: 'mary@gmail.com'
    }];
  }
};

module.exports = getUsers;