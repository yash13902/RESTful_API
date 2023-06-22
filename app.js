require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT;

const product_routes = require("./routes/product_route");

app.get("/", (req, res) => {
  res.send("Hi I am live!");
});

app.use(express.json());
app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
