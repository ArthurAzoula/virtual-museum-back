import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLID } from 'graphql';

export const OeuvreType = new GraphQLObjectType({
  name: 'Oeuvre',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    height: { type: GraphQLFloat },
    width: { type: GraphQLFloat },
    is_verified: { type: GraphQLBoolean },
    realised_at: { type: GraphQLString },
    file: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});