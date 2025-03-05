const Login = require('../controller/login'),
    router = require('express').Router();

router.post('/registration', Login.registration)
router.post("/login",Login.login)
module.exports = router