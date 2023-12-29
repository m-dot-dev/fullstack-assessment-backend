import Product from "../models/products.model.js";
import Starred from "../models/starred.model.js";

const populateDatabase = async () => {
  // delete all products
  await Product.destroy({
    where: {},
  });

  // create the standard 3 products
  await Product.create({
    name: "Product Management Tool",
    price: Math.floor(Math.random() * 1000),
    description: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
    detail: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
  });
  await Product.create({
    name: "Inventory Management Product",
    price: Math.floor(Math.random() * 1000),
    description: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
    detail: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
  });
  await Product.create({
    name: "Hospital Management System",
    price: Math.floor(Math.random() * 1000),
    description: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
    detail: "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
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
