const usersCtrl = {};

// Models
const User = require('../models/User');

usersCtrl.singup = async (req, res) => {
    let errors = [];
    const { email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
        errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length == 0) {
        // Look for email coincidence
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            errors.push({ text: "El correo esta en uso, recupera la contraseña en el botón de abajo." });
        } else {
            // Saving a New User
            const newUser = new User({ email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            errors.push({ text: "Te has registrado, ahora puedes iniciar sesión." });
            res.status(200).send(errors)

        }
    } else {
        res.status(500).send(errors);
    }
};

usersCtrl.getUsers = async (req, res) => {
    try {
      const users = await User.find({}, '_id email date'); 
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = usersCtrl;