const usersCtrl = {};
const axios = require('axios');
// Models
const User = require('../models/User');

const USER_SERVICE = process.env.USER_SERVICE;

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
    
    axios.get(`${USER_SERVICE}/getUsers`).then(response => {
        console.log(response);
      res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
      res.status(500).json(error);
    });
    
}


module.exports = usersCtrl;