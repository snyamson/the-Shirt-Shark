const router = require("express").Router();

router.get("/", (req, res, next) => {
  const data = req.context;

  res.render("home", data);
});

module.exports = router;
