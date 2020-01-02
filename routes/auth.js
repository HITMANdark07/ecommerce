const express = require("express");
const router = express.Router();

const { signUp,
        signin, 
        signout, 
        requireSignin 
    } = require('../controllers/auth');
const { userSignupValidator } = require('../validator/index');


router.post("/signup", userSignupValidator, signUp);
router.post('/signin', signin);
router.get('/signout', signout);


router.get('/hello', requireSignin, (req, res) => {
    res.send('hello there');
});

module.exports =router;