import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js"; // Adjust the path accordingly

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: Math.floor(Math.random() * 1000),
      validate: { min: 0 },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "This is a product description.",
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "This is a product detail.",
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export default Product;
