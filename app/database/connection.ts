import { Sequelize } from "sequelize-typescript";

// Import models
import Artist from "./models/Artist";
import Category from "./models/Category";
import Comment from "./models/Comment";
import Oeuvre from "./models/Oeuvre";
import Rating from "./models/Rating";
import Type_oeuvre from "./models/Type_oeuvre";
import User from "./models/User";

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
});

// Add models to sequelize
sequelize.addModels([Artist, Category, Comment, Oeuvre, Rating, Type_oeuvre, User]);

// Testez la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;