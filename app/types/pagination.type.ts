import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

export const createPaginationType = <T>(T: GraphQLObjectType) => {
  return new GraphQLObjectType({
    name: `${T.name}Pagination`,
    fields: () => ({
      count: { type: GraphQLInt },
      rows: { type: GraphQLList(T) }
    })
  });
}