"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//Import the function of the Middlewares that I going to use
var doesUserExist_1 = require("../middlewares/doesUserExist");
var validateBody_1 = require("../middlewares/validateBody");
var passwordMatch_1 = require("../middlewares/passwordMatch");
var encryptPassword_1 = require("../middlewares/encryptPassword");
var createToken_1 = require("../middlewares/createToken");
var Schemas = require('../schemas/allSchemas');
//Import the function of the Controllers that I going to use
var registrationController_1 = require("../controllers/registrationController");
router.post('/signup', validateBody_1.validateBody(Schemas.signupSchemaFJS), doesUserExist_1.doesUserExist, passwordMatch_1.passwordMatch, encryptPassword_1.encryptPassword, registrationController_1.signUpUser);
router.post('/login', validateBody_1.validateBody(Schemas.loginSchemaFJS), createToken_1.createToken, registrationController_1.loginUser);
module.exports = router;
