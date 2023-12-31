import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    roles: { type: GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});