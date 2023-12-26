const { GraphQLObjectType } = require('graphql');
const getUsers = require('../resolvers/getUsers');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers
  }
});

module.exports = query;