require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

// Koneksi MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// ROUTES

// CREATE Product
app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await Product.create({ name, price });
    res.json({ message: "Product created!", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ message: "Success", data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Jalankan Server
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server Running on Port ${process.env.PORT}`)
);