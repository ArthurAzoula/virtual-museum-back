import { GraphQLID, GraphQLInt } from 'graphql';
import { CategoryType } from '../types/category.type';
import Category from '../database/models/Category';
import { createPaginationType } from '../types/pagination.type';

const category = {
  type: CategoryType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Category.findByPk(id);
  }
}

const categories = {
  type: createPaginationType(CategoryType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Category.findAndCountAll({ limit, offset });
  }
}

export default { category, categories };