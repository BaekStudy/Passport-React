const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  // Passport
  passport.use(
    new LocalStrategy((username, password, done) => {
      UserModel.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    UserModel.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        isAdmin: user.isAdmin,
        id: user._id,
      };
      cb(err, userInformation);
    });
  });
};
