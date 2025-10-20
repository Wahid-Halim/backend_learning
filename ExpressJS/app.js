const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>
    <a href="/api/products">products</a>`);
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

app.get("/api/products/:productID", (req, res) => {
  //   console.log(req);
  //   console.log(req.params);

  const { productID } = req.params;

  const singleProduct = products.find((product) => {
    if (product.id === Number(productID)) {
      return product;
    }
  });

  if (!singleProduct) {
    return res.send("Product does not found 404");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("product review");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((products) => {
      return products.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
