import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import sequelize from "./models/index.js";
import productRouter from "./routes/products.routes.js";
import starredRouter from "./routes/starred.routes.js";
import populateDatabase from "./services/populateDatabase.js";


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

// Apply the rate limiting middleware to all requests.
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(limiter);

app.use("/product", productRouter);
app.use("/starred", starredRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize.sync().then(async () => {
  console.log(`Database & tables created!`);
  await populateDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
