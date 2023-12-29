import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const options = Boolean(process.env.LOCALDATABASE)
  ? {}
  : {
      dialectOptions: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
      define: {
        timestamps: false,
      },
    };
const sequelize = new Sequelize({
  dialect: "mysql", // or the dialect for your database
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  ...options,
  logging: false, // disable logging SQL queries to the console
});

export default sequelize;
