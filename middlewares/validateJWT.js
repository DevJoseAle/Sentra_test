const jwt = require('jsonwebtoken');
const { generateJWT } = require('../helpers/jwt');


const validateJWT = (req, res, next) =>{

    const token = req.header('x-token');

    console.log(token);
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token no existe'
        });

    }
        try {

            const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
            req.mail = payload.mail; 

        } catch (error) {
            return res.status(401).json({
                ok: false,
                msg: 'Token invalido',
                token
            });
        }


    next();

}

module.exports = {
    validateJWT
}