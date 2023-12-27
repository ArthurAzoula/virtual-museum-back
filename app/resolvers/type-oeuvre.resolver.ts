import { GraphQLID, GraphQLList } from 'graphql';
import { TypeOeuvreType } from '../types/type-oeuvre.type';

const oeuvreType = {
  type: TypeOeuvreType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const oeuvreTypes = {
  type: new GraphQLList(TypeOeuvreType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { oeuvreType, oeuvreTypes };