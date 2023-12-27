const express = require('express');
require('dotenv').config();
import { graphqlHTTP } from 'express-graphql';
import { Query } from './app/schemas/query';
import { GraphQLSchema } from 'graphql';

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query: Query}),
    graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));