//With this middleware I check if in th Cookies I have a Token:

const jwt = require('jwt-simple');
require('dotenv').config();

export async function checkToken(req, res, next) {
    try {
        const { token } = req.cookies;
        const decoded = jwt.decode(token, process.env.SECRET_KEY);
        const cookie = JSON.parse(decoded);
        const { id } = cookie;
        req.id = id
        next()
    } catch (error) {
        console.error(error);
        res.clearCookie('token');
        res.status(500).send(error.message);
    }
}