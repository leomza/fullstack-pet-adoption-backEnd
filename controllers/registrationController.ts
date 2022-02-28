export { };

const UsersDAO = require('../DAO/usersDAO')
const jwt = require('jwt-simple');
require('dotenv').config();

export async function signUpUser(req, res) {
    try {
        let { email, firstName, lastName, phoneNumber, role } = req.body;


        const userToAdd = {
            email: email,
            password: req.password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            role: role,
            createdDate: Date.now()
        }
        let user = await UsersDAO.createUser(userToAdd)

        //Set the cookie (the cookie is only going to contain the ID of the user)
        const cookieToWrite: string = JSON.stringify({ id: user._id });
        const token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        //The cookie is going to expire in 30 minutes
        res.cookie("token", token, { maxAge: 1800000 });

        res.send({ message: "Welcome to TuMascota!", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function loginUser(req, res) {
    try {
        const { user } = req.body;
        res.send({ message: "Welcome back to TuMascota!", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}