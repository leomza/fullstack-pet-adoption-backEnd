export { };

const UsersDAO = require('../DAO/usersDAO')

export async function updateUser(req, res) {
    try {
        let { email, firstName, lastName, phoneNumber, bio } = req.body;

        const userToModify = {
            email: email,
            password: req.password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            bio: bio
        }
        let user = await UsersDAO.modifyUser(req.id, userToModify)
        res.send({ message: "Amazing! Your user was modified", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getUserById(req, res) {
    try {
        const user = await UsersDAO.getTheUserById(req.id);
        res.send({ message: "Details of the user founded", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getAllUsers(req, res) {
    try {
        const allUsers = await UsersDAO.getAllTheUsers();
        res.send({ message: "Users founded", allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function changeUserRole(req, res) {
    try {
        const { id } = req.params;
        const { userRole } = req.body
        let newRole = '';
        if (userRole === 'admin') {
            newRole = 'user'
        } else if (userRole === 'user') {
            newRole = 'admin'
        }
        const userToModify = {
            role: newRole,
        }
        let user = await UsersDAO.modifyUser(id, userToModify)
        res.send({ message: "Amazing! Your user was modified", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}