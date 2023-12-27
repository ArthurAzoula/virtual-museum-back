const { GraphQLList } = require('graphql');

const userResolver = {
  type: new GraphQLList(require('../types/user.type')),
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

module.exports = userResolver;