const jwt = require('jsonwebtoken');

const generateJWT = ( mail) =>{

    return new Promise((resolve, reject) => {
        const payload = { mail };   
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '30mins'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });

})
}

module.exports = {
    generateJWT
}