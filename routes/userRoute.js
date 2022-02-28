"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//Import the function of the Middlewares that I going to use
var validateBody_1 = require("../middlewares/validateBody");
var passwordMatch_1 = require("../middlewares/passwordMatch");
var encryptPassword_1 = require("../middlewares/encryptPassword");
var checkToken_1 = require("../middlewares/checkToken");
var isAdmin_1 = require("../middlewares/isAdmin");
var Schemas = require('../schemas/allSchemas');
//Import the function of the Controllers that I going to use
var userControllers_1 = require("../controllers/userControllers");
router.get('/', checkToken_1.checkToken, userControllers_1.getUserById); //Get User By ID API
router.get('/all/:userId', isAdmin_1.isAdmin, userControllers_1.getAllUsers);
router.put('/:id', checkToken_1.checkToken, validateBody_1.validateBody(Schemas.signupSchemaFJS), passwordMatch_1.passwordMatch, encryptPassword_1.encryptPassword, userControllers_1.updateUser); //Update User API
router.put('/:id/changeRole', userControllers_1.changeUserRole);
module.exports = router;
