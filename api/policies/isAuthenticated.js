/**
 * Created by TuanAnh on 10/2/2017.
 */
module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else{
    return res.redirect('/login');
  }
};
