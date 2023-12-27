const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const query = require('./app/schemas/query');
const { GraphQLSchema } = require('graphql');
const { Sequelize } = require('sequelize');

// Connect to database postgresql
const sequelize = new Sequelize(process.env.DATABASE_URL);

// test connection
try {
    sequelize.authenticate();
    // Show message if connected and info about database
    console.log('Connection has been established successfully.');
    console.log('Database:', sequelize.getDatabaseName());
} catch (error) {
    console.error('Unable to connect to the database:', error.message);
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query}),
    graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));