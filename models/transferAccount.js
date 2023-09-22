const mongoose = require('mongoose');

const transferAccount = new mongoose.Schema({
    _id: Number,
    transfer_id: Number,
    amount: Number,
    from_account: String,
    to_account: String,

});
// const User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });

module.exports = mongoose.model( 'transferAccount', transferAccount );

