var checkRole = require('../services/checkRole.js').check;
var getUserProfile = require('../services/sqlSupport.js').getUserProfile_promise;

module.exports ={
  index: function(req, res) {
    var data = {};
    getUserProfile(req).then(function(user){
      data.user = user;
      res.view('index/homepage.ejs', data);
    });
  },

}
