const express = require('express');
const {
    getAdminRoute,
//   createPost,
//   updatePost,
//   getPost,
//   deletePost,
} = require('../controllers/admin-route');
const router = express.Router();

router.route('/').get(getAdminRoute);

router.route('/:id').get(getAdminRoute);

module.exports = router;
