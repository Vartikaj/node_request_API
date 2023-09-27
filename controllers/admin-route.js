
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
const registrationForm = require('../models/registrationForm');
// const asyncHandler = require('../middleware/async');

  exports.getAdminRoute = asyncHandler(async (req, res, next) => {
    try {
        //console.log(await Post.find());
        const accountUsersData = await registrationForm.find({});
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


  exports.getDataById = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id;
        const accountUsersData = await registrationForm.find({ _id : id }).exec();
        res.status(200).json({
          success: true,
          data: accountUsersData,
        });
      } catch (error) {
        console.error('Error in getAdminRoute:', error);
        next(error); // Pass the error to the next middleware
      }
  });


  exports.updateDataById = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id;
        const insertUserData = await registrationForm.updateOne({_id: id}, req.body); 
        if(insertUserData.modifiedCount === 1){
          console.log("(1) data modified successfully");
          res.status(200).json({
            success: true,
            data: insertUserData,
          });

        }else {
          console.log("Their is some error");
        } 
      } catch (error) {
        console.error('Error in getAdminRoute:', error);
      }
      next(error);
  });


  exports.deleteDataById = asyncHandler(async(req, res, next) => {
    try{
      const id = req.query.id;
      const deleteData = await registrationForm.deleteOne({_id : id});
      if(deleteData.deletedCount === 1){
        console.log("(1) data has been deleted !!");
      }
    } catch (error){
      console.error('Error in deleteDataById'. error);
    }
    next();
  });


