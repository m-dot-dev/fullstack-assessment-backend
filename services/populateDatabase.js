import Product from "../models/products.model.js";
import Starred from "../models/starred.model.js";

const populateDatabase = async () => {
  // delete all products
  await Product.destroy({
    where: {},
  });

  // create the standard 3 products
  await Product.create({
    name: "Product 1",
    price: Math.floor(Math.random() * 1000),
    description: "This is a product description for Product 1.",
    detail: "This is a product detail for Product 1.",
  });
  await Product.create({
    name: "Product 2",
    price: Math.floor(Math.random() * 1000),
    description: "This is a product description for Product 2.",
    detail: "This is a product detail for Product 2.",
  });
  await Product.create({
    name: "Product 3",
    price: Math.floor(Math.random() * 1000),
    description: "This is a product description for Product 3.",
    detail: "This is a product detail for Product 3.",
  });

  // await Starred.create({
  //   user_name: "John Doe",
  //   user_email: "john@doe.com",
  //   product_name: "Product 1",
  //   product_rating: "5",
  // });

  // await Starred.create({
  //   user_name: "Mary Doe",
  //   user_email: "mary@doe.com",
  //   product_name: "Product 2",
  //   product_rating: "3",
  // });
};

export default populateDatabase;
