const express = require('express');
const router = express.Router();

const subscriptionController = require('../controllers/subscriptionController');

router.get('/', subscriptionController.getSubscriptions);
router.post('/', subscriptionController.addSubscription);
router.delete('/', subscriptionController.removeSubscription);

module.exports = router;