import { GraphQLID, GraphQLList } from 'graphql';
import { OeuvreType } from '../types/oeuvre.type';

const oeuvre = {
  type: OeuvreType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const oeuvres = {
  type: new GraphQLList(OeuvreType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { oeuvre, oeuvres };