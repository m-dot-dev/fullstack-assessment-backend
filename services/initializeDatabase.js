import Product from "../models/products.model.js";

const initializeDatabase = async () => {
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
};

export default initializeDatabase;
