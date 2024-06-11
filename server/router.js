const router = require('express').Router();
const controller = require('./controller');

router.get('/businesses', controller.getBusinesses);
router.get('/categories', controller.getCategories);
router.get('/businesses/:id', controller.getBusinessById);

router.post('/translate', controller.translate);

module.exports = router;
