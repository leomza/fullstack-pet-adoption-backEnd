const UsersDAO = require('../DAO/usersDAO')

const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
require('dotenv').config();

export async function createToken(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await UsersDAO.getUserByEmail(email)
        req.body.user = user;
        if (!user) {
            res.status(400).send({ message: "The user doesn't exist" });
            return;
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (!result) {
                res.status(400).send({ message: "Wrong password" })
                return;
            }
            if (result) {
                //Set the cookie (the cookie is only going to contain the ID of the user)
                const cookieToWrite: string = JSON.stringify({ id: user._id });
                const token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
                if (!req.cookies.token) {
                    //The cookie is going to expire in 30 minutes
                    res.cookie("token", token, { maxAge: 1800000 });
                    console.log('Cookie Created');
                    next()
                }
            }
        })


    } catch (error) {

    }
}