var checkRole = require('../services/checkRole.js').check;
module.exports = {
  getUserProfile_promise: function (req) {
    return new Promise(function(fullfill, reject){
      var role = checkRole(req);
      if(role == 'guest'){
        return fullfill(null);
      }else {
        var userId = req.session.passport.user.id;
        User.findOne({id:userId}).exec(function(err, user){
          if(user){
            // console.log('-----'+user.userId);
            return fullfill(user);
          }else{

            return fullfill(null);
          }
        })
      }
    });
  }
};

