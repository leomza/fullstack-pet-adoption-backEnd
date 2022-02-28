"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//Import the function of the Middlewares that I going to use
var validateBody_1 = require("../middlewares/validateBody");
var isAdmin_1 = require("../middlewares/isAdmin");
var checkToken_1 = require("../middlewares/checkToken");
var uploadImage = require('../middlewares/uploadImage').uploadImage; //To save the image in the server
var Schemas = require('../schemas/allSchemas');
//Import the function of the Controllers that I going to use
var petController_1 = require("../controllers/petController");
router.get('/:id', petController_1.getPetById); //Get Pet By ID API
router.get('/', isAdmin_1.checkIsAdmin, petController_1.getPets); //Get Pets API
router.get('/user/:userId', petController_1.getPetsByUser); //Get Pets By User ID API
router.get('/user/:userId/owned', petController_1.getPetsOwnedByUser); //Get Pets By User ID API
router.post('/:userId', isAdmin_1.isAdmin, uploadImage.single('picture'), validateBody_1.validateBody(Schemas.petSchemaFJS), petController_1.addPet); // Add pet API
router.post('/:petId/return', checkToken_1.checkToken, petController_1.returnPet); //Return Pet API
router.post('/:petId/save', checkToken_1.checkToken, petController_1.savePet); //Save Pet API
router.post('/:petId/adopt', checkToken_1.checkToken, petController_1.adoptOrFosterPet); //Adopt/Foster API
router.post('/:petId/unsave', checkToken_1.checkToken, petController_1.unsavePet); //Unsave Pet API
router.put('/:petId/:userId', isAdmin_1.isAdmin, uploadImage.single('picture'), validateBody_1.validateBody(Schemas.petSchemaFJS), petController_1.editPet); //Edit Pet API
router["delete"]('/:petId', isAdmin_1.checkIsAdmin, petController_1.deletePet); //Delete Pet API
module.exports = router;
