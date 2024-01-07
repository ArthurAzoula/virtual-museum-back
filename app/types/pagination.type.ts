import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

export const createPaginationType = <T>(T: GraphQLObjectType) => {
  return new GraphQLObjectType({
    name: 'Pagination',
    fields: () => ({
      totalCount: { type: GraphQLInt },
      datas: { type: GraphQLList(T) }
    })
  });
}