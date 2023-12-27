const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const query = require('./app/schemas/query');
const { GraphQLSchema } = require('graphql');

var pgp = require('pg-promise')();

var db = pgp(process.env.DATABASE_URL);

db.one('SELECT $1 AS value', 123)
    .then(function (data) {
        console.log('DATA:', data.value)
    })
    .catch(function (error) {
        console.log('ERROR:', error)
    });


const app = express();
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query}),
    graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));