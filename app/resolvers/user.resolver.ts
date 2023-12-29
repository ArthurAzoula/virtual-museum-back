import { GraphQLList } from 'graphql';
import { UserType } from '../types/user.type';
import User from '../database/models/User';

export const UserResolver = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error("Error while fetching users.");
    }
  }
};