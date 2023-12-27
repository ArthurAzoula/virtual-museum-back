require('dotenv').config();
const express = require('express');
import { Sequelize } from 'sequelize-typescript';
import { graphqlHTTP } from 'express-graphql';
import { Query } from './app/schemas/query';
import { GraphQLSchema } from 'graphql';

// Connect to database postgresql
const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
});

// test connection
try {
    sequelize.authenticate();
    // Show message if connected and info about database
    console.log('Connection has been established successfully.');
    console.log('Database:', sequelize.getDatabaseName());
} catch (error: any) {
    console.error('Unable to connect to the database:', error.message);
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query: Query}),
    graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));