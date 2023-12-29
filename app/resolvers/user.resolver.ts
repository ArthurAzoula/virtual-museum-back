import { GraphQLList } from 'graphql';
import { UserType } from '../types/user.type';

export const UserResolver = {
  type: new GraphQLList(UserType),
  resolve: () => {
    return [{
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Mary',
      email: 'mary@gmail.com'
    }];
  }
};