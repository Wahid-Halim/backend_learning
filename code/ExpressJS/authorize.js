const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "wahid") {
    req.user = { firstName: "wahid", id: 9191 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
