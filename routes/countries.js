const {Router} = require("express");
const checkJWT = require("../middlewares/checkJWT");
const { getCountries } = require("../controllers/countries");
const router = Router();


router.get('/',checkJWT, getCountries);
 

module.exports = router;