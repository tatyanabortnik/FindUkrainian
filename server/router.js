const router = require('express').Router();
const controller = require('./controller');

router.get('/businesses', controller.getBusinesses);
router.get('/categories', controller.getCategories);
//TODO: add getBusinessById get function

module.exports = router;
