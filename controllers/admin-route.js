
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
const registrationForm = require('../models/registrationForm');
// const asyncHandler = require('../middleware/async');

  exports.getAdminRoute = asyncHandler(async (req, res, next) => {
    try {
        //console.log(await Post.find());
        const accountUsersData = await registrationForm.find({});
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

  

  exports.postRegistrationData = asyncHandler(async (req, res, next) => {
    try {
      const user = new registrationForm(req.body);
        const insertUserData = await user.save();
        console.log("Inserted data " + insertUserData);
        res.status(200).json({
          success: true,
          //credentials: true, 
          data: insertUserData
        });
      } catch (error) {
        console.error('Error in getAdminRoute:', error);
        next(error); // Pass the error to the next middleware
      }
  });
