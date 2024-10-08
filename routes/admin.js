const express = require("express");
const { body } = require("express-validator");

const postController = require("../controllers/post");
const userController = require("../controllers/user");
const { isPremium } = require("../middleware/isPremium");

const router = express.Router();
// /admin/create-post
router.get("/create-post", postController.renderCreatePage);

router.post(
  "/",
  [
    body("title")
      .isLength({ min: 10 })
      .withMessage("Title must have 10 letters."),
    body("description")
      .isLength({ min: 30 })
      .withMessage("Description must have 30 letters."),
  ],
  postController.createPost
);

router.get("/edit/:postId", postController.getEditPost);

router.post(
  "/edit-post",
  [
    body("title")
      .isLength({ min: 10 })
      .withMessage("Title must have 10 letters"),
    body("description")
      .isLength({ min: 30 })
      .withMessage("Description must have 30letters."),
  ],
  postController.updatePost
);

router.post("/delete/:postId", postController.deletePost);
router.get("/profile", userController.getProfile);
router.get("/username", userController.renderUsernamePage);
router.post(
  "/set-username",
  body("username")
    .isLength({ min: 4 })
    .withMessage("Username must have 4 letters"),
  userController.setUsername
);
router.get("/premium", userController.renderPremiumPage);
router.get("/subscription-success", userController.renderSubSuccessPage);
router.get("/subscriptio-cancel", userController.renderPremiumPage);
router.get("/premium-details", userController.getPremiumDetails);
router.get("/profile-image", isPremium, userController.renderProfileUploadPage);
router.post("/set_profile", isPremium, userController.setProfileImage);

module.exports = router;
