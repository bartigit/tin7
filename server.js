const express = require('express');
const productController = require("./controllers/controller");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/products', productController.getProducts);
app.get('/products/add', productController.getAddProduct);
app.get('/products/:id', productController.getProductDetails);
app.post('/products/add', productController.postAddProduct);

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});