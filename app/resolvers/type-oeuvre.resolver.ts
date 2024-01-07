import { GraphQLID, GraphQLInt } from 'graphql';
import { TypeOeuvreType } from '../types/type-oeuvre.type';
import Type_oeuvre from '../database/models/Type_oeuvre';
import { createPaginationType } from '../types/pagination.type';

const oeuvreType = {
  type: TypeOeuvreType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Type_oeuvre.findByPk(id);
  }
}

const oeuvreTypes = {
  type: createPaginationType(TypeOeuvreType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Type_oeuvre.findAndCountAll({ limit, offset });
  }
}

export default { oeuvreType, oeuvreTypes };