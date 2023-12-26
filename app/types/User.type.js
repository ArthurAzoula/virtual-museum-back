const { GraphQLString, GraphQLInt, GraphQLObjectType } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

module.exports = UserType;