import { GraphQLID, GraphQLInt } from 'graphql';
import { RatingType } from '../types/rating.type';
import Rating from '../database/models/Rating';
import { createPaginationType } from '../types/pagination.type';

const rating = {
  type: RatingType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Rating.findByPk(id);
  }
}

const ratings = {
  type: createPaginationType(RatingType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Rating.findAndCountAll({ limit, offset });
  }
}

export default { rating, ratings };