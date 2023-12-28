import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
  Product.findAll().then((products) => {
    res.status(200).json({ data: products });
  });
};
