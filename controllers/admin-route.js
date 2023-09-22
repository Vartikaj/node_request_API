
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
const transferAccount = require('../models/transferAccount');
// const asyncHandler = require('../middleware/async');

  exports.getAdminRoute = asyncHandler(async (req, res, next) => {
    try {
        //console.log(await Post.find());
        const accountUsersData = await transferAccount.find({});
        console.log(accountUsersData);
        res.status(200).json({
          success: true,
          data: accountUsersData,
        });
      } catch (error) {
        console.error('Error in getAdminRoute:', error);
        next(error); // Pass the error to the next middleware
      }
  });
