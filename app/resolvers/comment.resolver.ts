import { GraphQLID, GraphQLList } from 'graphql';
import { CommentType } from '../types/comment.type';

const comment = {
  type: CommentType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const comments = {
  type: new GraphQLList(CommentType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { comment, comments };