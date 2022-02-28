export { };

const bcrypt = require('bcrypt');

export async function encryptPassword(req, res, next) {
    try {
        let { password } = req.body;
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        req.password = password;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}