import cron from "node-cron";
import Product from "../models/products.model.js";
// Function to update the price of a product randomly
function updateProductPrice(productId) {
  const newPrice = Math.random() * 100; // Generate a random price between 0 and 100
  // Update the price of the product in the database or perform any other necessary action
  console.log(`Updated price of product ${productId} to ${newPrice}`);
}

// Function to update the price of all products randomly
function updateAllProductPrices() {
  // Get all product IDs from the database or any other source
  const products = Product.findAll();
  let productIds = products.map((product) => product.id);

  // Update the price of each product
  productIds.forEach((productId) => {
    updateProductPrice(productId);
  });
}

// Function to start the cron job
function startPriceUpdateCron() {
  // Run the updateAllProductPrices function every day at 12:00 AM
  cron.schedule("0 0 * * *", () => {
    updateAllProductPrices();
  });
}

// Export the startPriceUpdateCron function
export default startPriceUpdateCron;
