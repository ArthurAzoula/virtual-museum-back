import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } from 'graphql';
import { OeuvreType } from './oeuvre.type';
import { UserType } from './user.type';

export const RatingType = new GraphQLObjectType({
  name: 'Rating',
  fields: () => ({
    id: { type: GraphQLID },
    note: { type: GraphQLFloat },
    oeuvre: { type: OeuvreType },
    user: { type: UserType },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString }
  })
});