const express = require("express");
const app = express();

const peopleRoutes = require("./routes/people");
const authRoutes = require("./routes/auth");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// people routes
app.use("/api/people", peopleRoutes);
// auth routes
app.use("/login", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
