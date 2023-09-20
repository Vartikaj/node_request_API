const express = require('express');

exports.getAdminRoute = asyncHandler(async (req, res, next) => {
    const posts = await AdminRoute.find();
    res.status(200).json({
      success: true,
      data: posts,
    });
  });