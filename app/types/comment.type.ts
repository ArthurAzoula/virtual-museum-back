import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { UserType } from './user.type';
import { OeuvreType } from './oeuvre.type';

export const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    oeuvre: { type: OeuvreType },
    user: { type: UserType },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});