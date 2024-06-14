const router = require('express').Router();
const controller = require('./controller');
const Business = require("./models/business");
const Category = require("./models/categories");

router.get("/businesses", controller.getAllMiddleware(Business));
router.get("/categories", controller.getAllMiddleware(Category));
router.get("/businesses/:id", controller.getBusinessById);
router.get("categories/:id", controller.getCategoryById);

module.exports = router;
