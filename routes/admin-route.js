const express = require('express');
const router = express.Router();

const {
    getAdminRoute,
    postRegistrationData,
} = require('../controllers/admin-route');

router.route('/getAdminRoute').get(getAdminRoute);
router.route('/postRegistrationData').get(postRegistrationData);

module.exports = router;
