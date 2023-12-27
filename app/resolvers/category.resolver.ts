import { GraphQLID, GraphQLList } from 'graphql';
import { CategoryType } from '../types/category.type';

const category = {
  type: CategoryType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const categories = {
  type: new GraphQLList(CategoryType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { category, categories };