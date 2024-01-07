import { GraphQLID, GraphQLInt } from 'graphql';
import { CommentType } from '../types/comment.type';
import { createPaginationType } from '../types/pagination.type';
import Comment from '../database/models/Comment';

const comment = {
  type: CommentType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Comment.findByPk(id);
  }
}

const comments = {
  type: createPaginationType(CommentType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Comment.findAndCountAll({ limit, offset });
  }
}

export default { comment, comments };