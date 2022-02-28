export { };

const usersDAO = require('../DAO/usersDAO')
const jwt = require('jwt-simple');
require('dotenv').config();

export async function isAdmin(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await usersDAO.getTheUserById(userId);

        if (user.role === 'admin') { // user is admin
            next();
        } else {
            res.status(401).send('You are not authorized to open this page')
            return;
        };

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function checkIsAdmin(req, res, next) {
    try {
        if (req.cookies.token) {
            const { token } = req.cookies;
            const decoded = jwt.decode(token, process.env.SECRET_KEY);
            const cookie = JSON.parse(decoded);
            const { id } = cookie;

            const user = await usersDAO.getTheUserById(id);
            if (user.role === 'admin') { // user is admin
                req.admin = true;
                next();
            } else {
                req.admin = false;
                next();
            };
        } else {
            req.admin = false;
            next()
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}