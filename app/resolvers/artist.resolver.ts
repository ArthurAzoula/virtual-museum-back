import { GraphQLID, GraphQLList } from 'graphql';
import { ArtistType } from '../types/artist.type';

const artist = {
  type: ArtistType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const artists = {
  type: new GraphQLList(ArtistType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { artist, artists };