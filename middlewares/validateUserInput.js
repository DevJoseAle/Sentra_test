const validateUserInput = (req, res, next) => {
    const { mail, password } = req.body;
  
    // Verifica mail
    if (!mail || !isValidEmail(mail)) {
      return res.status(400).json({ error: 'Correo electrónico inválido' });
    }

    // Verifica password
    if (!password || !isValidPassword(password)) {
      return res.status(400).json({ error: 'Contraseña inválida' });
    }
    next()
};
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPassword = (password) => {
    return password.length >= 6;
  };
  
  module.exports = validateUserInput;