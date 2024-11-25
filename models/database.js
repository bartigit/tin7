const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

async function testConnection() {
    try {
      await database.authenticate();
      console.log(`Successfully connected to database: ${process.env.DB_NAME} on host: ${process.env.DB_HOST}`);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
  
testConnection();  

module.exports = database;