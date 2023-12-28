import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js"; // Adjust the path accordingly

class Starred extends Model {}

Starred.init(
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Starred",
    tableName: "Starred",
  }
);

export default Starred;
