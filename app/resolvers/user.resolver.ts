import { GraphQLID, GraphQLInt } from 'graphql';
import { UserType } from '../types/user.type';
import { createPaginationType } from '../types/pagination.type';
import User from '../database/models/User';

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return User.findByPk(id);
  }
}

const users = {
  type: createPaginationType(UserType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return User.findAndCountAll({ limit, offset });
  }
}

export default { user, users };