module.exports = {
  check: function (req) {
    // console.log(req.session);
    if(!req.session) return 'guest';
    if(!req.session.passport) return 'guest';
    if(!req.session.passport.user) return 'guest';
    if(!req.session.passport.user.role) return 'guest';
    if(req.session.passport.user.role == 'member') return 'member';
    if(req.session.passport.user.role == 'teacher') return 'teacher';
    if(req.session.passport.user.role == 'admin') return 'admin';
    return 'guest';
  }
};
