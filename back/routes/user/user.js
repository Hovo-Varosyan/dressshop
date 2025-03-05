const User = require('../../controller/user/user');

router = require('express').Router();

// router.get('/')
router.delete('/deleteprofile', User.deleteProfile)
router.get("/", User.getProfileData)
router.post("/contact", User.contactChange)
router.post("/password", User.passwordChange)
router.patch("/maindata", User.mainDataChange)
router.post("/signout", User.signOut)
module.exports = router