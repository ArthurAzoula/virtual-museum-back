import { GraphQLID, GraphQLInt } from 'graphql';
import { ArtistType } from '../types/artist.type';
import { createPaginationType } from '../types/pagination.type';
import Artist from '../database/models/Artist';

const artist = {
  type: ArtistType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, { id }: any) => {
    return Artist.findByPk(id);
  }
}

const artists = {
  type: createPaginationType(ArtistType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (_: any, { limit = 50, offset = 0 }: any) => {
    return Artist.findAndCountAll({ limit, offset });
  }
}

export default { artist, artists };