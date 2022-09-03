const router = require("express").Router();
const {
  회원가입,
  로그인,
  req유저보기,
  로그아웃,
  유저삭제,
  유저다보기,
} = require("../Controller/authController");

const { isAdmin } = require("../Middleware/isAdminMiddleware");

const passport = require("passport");
require("../Config/passportConfig")(passport);

// Routes
router.post("/register", 회원가입);
router.post("/login", passport.authenticate("local"), 로그인);
router.get("/user", req유저보기);
router.get("/logout", 로그아웃);
router.post("/deleteuser", isAdmin, 유저삭제);
router.get("/getallusers", isAdmin, 유저다보기);

module.exports = router;
