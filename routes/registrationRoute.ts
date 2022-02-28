export { };
const express = require('express');
const router = express.Router();

//Import the function of the Middlewares that I going to use
import { doesUserExist } from '../middlewares/doesUserExist';
import { validateBody } from '../middlewares/validateBody';
import { passwordMatch } from '../middlewares/passwordMatch';
import { encryptPassword } from '../middlewares/encryptPassword';
import { createToken } from '../middlewares/createToken';

const Schemas = require('../schemas/allSchemas');

//Import the function of the Controllers that I going to use
import { signUpUser, loginUser } from '../controllers/registrationController'

router.post('/signup', validateBody(Schemas.signupSchemaFJS), doesUserExist, passwordMatch, encryptPassword, signUpUser);
router.post('/login', validateBody(Schemas.loginSchemaFJS), createToken, loginUser);

module.exports = router;