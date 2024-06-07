const router = require('express').Router();
const controller = require('./controller');

router.get('/businesses', controller.getBusinesses);
router.get('/businesses/:id', controller.getBusinessById);

module.exports = router;
