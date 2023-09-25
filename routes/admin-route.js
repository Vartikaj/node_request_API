const express = require('express');
const router = express.Router();

const {
    getAdminRoute,
    postRegistrationData,
} = require('../controllers/admin-route');

router.route('/getAdminRoute').get(getAdminRoute);
router.route('/postRegistrationData').post(postRegistrationData);

module.exports = router;
