const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { generateJWT } = require('../helpers/jwt');

const getUsers =  async (req, res) => {

    const {mail, password} = req.body;

    const filePath = path.join(__dirname,'..' , 'data', 'users.json');

    
        try {
            const data = await fs.readFileSync(filePath, 'utf-8');
            const users = JSON.parse(data);

            const foundUser = users.find(user =>user.mail === mail && user.password === password)

            
            if(foundUser){
                
                const token = await generateJWT( mail);

                foundUser.token = token

                fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');

                res.json({
                    message: 'usuario encontrado',
                    user: foundUser,

                })
            }else{
                res.status(404).json({
                    message: 'usuario no encontrado'
                })
            }

   
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error interno del servidor',
        })
    }
}

const renewToken =  async (req, res) => {

    const{ mail }= req;

    const token = await generateJWT(req.mail);

    res.json({
        message: 'renewUser',
        mail,
        token
    })

}

module.exports = {
    getUsers,
    renewToken
}