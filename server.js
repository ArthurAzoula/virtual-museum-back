const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const query = require('./app/schemas/query');
const { GraphQLSchema } = require('graphql');

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query}),
    graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));