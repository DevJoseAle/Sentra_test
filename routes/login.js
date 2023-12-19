const {Router} = require("express");
const router = Router();
const {renewToken, getUsers} = require('../controllers/login');
const validateUserInput = require("../middlewares/validateUserInput");
const { validateJWT } = require("../middlewares/validateJWT");

router.post('/', validateUserInput, getUsers);

router.get('/renew', validateJWT,  renewToken );

module.exports = router;