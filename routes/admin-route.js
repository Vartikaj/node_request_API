const express = require('express');
const router = express.Router();

const {
    getAdminRoute,
    postRegistrationData,
    getDataById,
    updateDataById,
    deleteDataById
} = require('../controllers/admin-route');

router.route('/getAdminRoute').get(getAdminRoute);
router.route('/getDataById').get(getDataById);
router.route('/postRegistrationData').post(postRegistrationData);
router.route('/updateDataById').put(updateDataById);
router.route('/deleteDataById').delete(deleteDataById);


module.exports = router;


