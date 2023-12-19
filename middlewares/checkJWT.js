const jwt = require('jsonwebtoken');

const checkJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.SECRET_JWT_SEED); // Reemplaza 'secreto' con tu clave secreta
    req.user = decoded.user;  
    next(); 
  } catch (error) {
    console.error('Error de validación de JWT :', error);
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = checkJWT;