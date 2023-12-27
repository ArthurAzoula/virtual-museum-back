import { GraphQLID, GraphQLList } from 'graphql';
import { NoteType } from '../types/note.type';

const note = {
  type: NoteType,
  args: {
    id: { type: GraphQLID },
  },
  
  // TODO: implement
  resolve: (_: any, { id }: any) => {
    return [];
  }
}

const notes = {
  type: new GraphQLList(NoteType),
  
  // TODO: implement
  resolve: () => {
    return [];
  }
}

export default { note, notes };