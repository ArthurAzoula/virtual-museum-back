import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';

export const ArtistType = new GraphQLObjectType({
  name: 'Artist',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    roles: { type: GraphQLList(GraphQLString) },
    phone: { type: GraphQLString },
    about: { type: GraphQLString },
    instagram: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});