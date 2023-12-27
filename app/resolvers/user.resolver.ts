import { GraphQLID, GraphQLList } from 'graphql';
import { UserType } from '../types/user.type';

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const users = {
  type: new GraphQLList(UserType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { user, users };