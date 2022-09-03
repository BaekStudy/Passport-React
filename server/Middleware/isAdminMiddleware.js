const UserModel = require("../Model/UserModel");

exports.isAdmin = (req, res, next) => {
  const { user } = req;
  if (user) {
    UserModel.findOne({ username: user.username }, (err, doc) => {
      if (err) throw err;
      if (doc.isAdmin) {
        next();
      } else {
        res.send("Sorry, only admin's can perform this.");
      }
    });
  } else {
    res.send("Sorry, you arent logged in.");
  }
};
