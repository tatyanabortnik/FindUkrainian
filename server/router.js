const router = require('express').Router();
const controller = require('./controller');
const Business = require("./models/business");
const Category = require("./models/category");

router.get("/businesses", controller.getAllMiddleware(Business));
router.get("/categories", controller.getAllMiddleware(Category));
router.get("/businesses/:id", controller.getByIdMiddleware(Business));
router.get("/categories/:id", controller.getByIdMiddleware(Category));

module.exports = router;