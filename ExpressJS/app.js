const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { image, id, name } = product;
    return {
      image,
      id,
      name,
    };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
