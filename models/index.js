
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'assessmentdb',
  username: 'root',
  password: '123456',
  dialect: 'mysql', // or the dialect for your database
  host: 'localhost',
  
  logging: false, // disable logging SQL queries to the console
});

export default sequelize;