import { GraphQLID, GraphQLInt } from 'graphql';
import { OeuvreType } from '../types/oeuvre.type';
import Oeuvre from '../database/models/Oeuvre';
import { createPaginationType } from '../types/pagination.type';

const oeuvre = {
  type: OeuvreType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Oeuvre.findByPk(id);
  }
}

const oeuvres = {
  type: createPaginationType(OeuvreType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Oeuvre.findAndCountAll({ limit, offset });
  }
}

export default { oeuvre, oeuvres };