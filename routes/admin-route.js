const express = require('express');
const router = express.Router();

const {
    getAdminRoute,
//   createPost,
//   updatePost,
//   getPost,
//   deletePost,
} = require('../controllers/admin-route');
router.route('/getAdminRoute').get(getAdminRoute);
// router.route('/:id').get(getAdminRoute);

module.exports = router;
