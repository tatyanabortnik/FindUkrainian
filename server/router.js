const router = require('express').Router();
const controller = require('./controller');

router.get('/businesses', controller.getAllBusinesses);
router.get('/categories', controller.getAllCategories);
router.get("/businesses/:id", controller.getBusinessById);
router.get("categories/:id", controller.getCategoryById);

module.exports = router;
