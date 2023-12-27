const { GraphQLObjectType } = require('graphql');
const userResolver = require('../resolvers/user.resolver');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    userResolver
  }
});

module.exports = query;