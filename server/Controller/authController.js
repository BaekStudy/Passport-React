const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");

exports.회원가입 = async (req, res) => {
  const { username, password } = req?.body;
  if (!username || !password) {
    res.send("Improper Values");
    return;
  }
  UserModel.findOne({ username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("success");
    }
  });
};
exports.로그인 = (req, res) => {
  res.send("success");
};
exports.req유저보기 = (req, res) => {
  res.json({ message: req.user });
};
exports.로그아웃 = (req, res) => {
  req.logout();
  res.send("success");
};
exports.유저삭제 = async (req, res) => {
  const { id } = req.body;
  await UserModel.findByIdAndDelete(id, (err) => {
    if (err) throw err;
  });
  res.send("success");
};
exports.유저다보기 = async (req, res) => {
  await UserModel.find({}, (err, data) => {
    if (err) throw err;
    const filteredUsers = [];
    data.forEach((item) => {
      const userInformation = {
        id: item._id,
        username: item.username,
        isAdmin: item.isAdmin,
      };
      filteredUsers.push(userInformation);
    });
    res.send(filteredUsers);
  });
};
