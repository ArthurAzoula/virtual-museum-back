import { GraphQLObjectType } from 'graphql';
import ArtistResolver from '../resolvers/artist.resolver';
import CategoryResolver from '../resolvers/category.resolver';
import CommentResolver from '../resolvers/comment.resolver';
import NoteResolver from '../resolvers/rating.resolver';
import OeuvreResolver from '../resolvers/oeuvre.resolver';
import TypeOeuvreResolver from '../resolvers/type-oeuvre.resolver';
import UserResolver from '../resolvers/user.resolver';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...ArtistResolver,
    ...CategoryResolver,
    ...CommentResolver,
    ...NoteResolver,
    ...OeuvreResolver,
    ...TypeOeuvreResolver,
    ...UserResolver,
  }
});