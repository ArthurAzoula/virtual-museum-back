import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});