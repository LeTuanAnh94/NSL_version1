/**
 * Created by TuanAnh on 10/2/2017.
 */
var passport = require('passport');

module.exports ={
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },
  local: function (req, res) {
    passport.authenticate('local', { successRedirect: '/',failureRedirect: '/', failureFlash: true},function(err, user, info){
      if(err){
        return res.json({message:'error'});
      }
      if(!user){
        return res.json({message:info.message});
      }
      req.logIn(user, function(err){
        if (err) {
          console.log(err)
          return res.json({message:'error'});
        }
        req.session.cookie.maxAge = 3 * 24 * 60 * 60 * 1000; //30 * 24 * 60 * 60 * 1000;
        return res.json({message:'success'});
      });
    })(req, res);
  },
};
