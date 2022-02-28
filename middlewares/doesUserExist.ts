export { };

const UsersDAO = require('../DAO/usersDAO')

export async function doesUserExist(req, res, next) {
    try {
        const { email } = req.body;
        //To check if the email is unique:
        const user = await UsersDAO.getUserByEmail(email)
        if (user !== null) {
            return res.status(400).send({ message: 'User already exists' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}