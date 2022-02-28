export { };
const express = require('express');
const router = express.Router();

//Import the function of the Middlewares that I going to use
import { validateBody } from '../middlewares/validateBody';
import { passwordMatch } from '../middlewares/passwordMatch';
import { encryptPassword } from '../middlewares/encryptPassword';
import { checkToken } from '../middlewares/checkToken';
import { isAdmin } from '../middlewares/isAdmin';

const Schemas = require('../schemas/allSchemas');

//Import the function of the Controllers that I going to use
import { updateUser, getUserById, getAllUsers, changeUserRole } from '../controllers/userControllers'

router.get('/', checkToken, getUserById); //Get User By ID API
router.get('/all/:userId', isAdmin, getAllUsers);
router.put('/:id', checkToken, validateBody(Schemas.signupSchemaFJS), passwordMatch, encryptPassword, updateUser); //Update User API
router.put('/:id/changeRole', changeUserRole);

module.exports = router;