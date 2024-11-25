const Product = require("../models/product");

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.render("products/list", { products });
};

const getAddProduct = (req, res) => {
  res.render("products/add");
};

const postAddProduct = async (req, res) => {
  const { name, description, price } = req.body;
  await Product.create({ name, description, price });
  res.redirect("/products");
};

const getProductDetails = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.render("products/details", { product });
  } else {
    res.status(404).send("Produkt nie znaleziony.");
  }
};

module.exports = {
  getProducts,
  getAddProduct,
  getProductDetails,
  postAddProduct,
};