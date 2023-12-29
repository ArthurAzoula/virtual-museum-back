import { GraphQLObjectType } from 'graphql';
import { UserResolver } from '../resolvers/user.resolver';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserResolver
  }
});