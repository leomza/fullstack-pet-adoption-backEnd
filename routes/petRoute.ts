export { };
const express = require('express');
const router = express.Router();

//Import the function of the Middlewares that I going to use
import { validateBody } from '../middlewares/validateBody';
import { isAdmin, checkIsAdmin } from '../middlewares/isAdmin';
import { checkToken } from '../middlewares/checkToken';
const { uploadImage } = require('../middlewares/uploadImage'); //To save the image in the server

const Schemas = require('../schemas/allSchemas');

//Import the function of the Controllers that I going to use
import { addPet, getPetById, editPet, getPets, returnPet, deletePet, savePet, unsavePet, getPetsByUser, adoptOrFosterPet, getPetsOwnedByUser } from '../controllers/petController'

router.get('/:id', getPetById); //Get Pet By ID API
router.get('/', checkIsAdmin, getPets); //Get Pets API
router.get('/user/:userId', getPetsByUser); //Get Pets By User ID API
router.get('/user/:userId/owned', getPetsOwnedByUser); //Get Pets By User ID API
router.post('/:userId', isAdmin, uploadImage.single('picture'), validateBody(Schemas.petSchemaFJS), addPet); // Add pet API
router.post('/:petId/return', checkToken, returnPet); //Return Pet API
router.post('/:petId/save', checkToken, savePet); //Save Pet API
router.post('/:petId/adopt', checkToken, adoptOrFosterPet); //Adopt/Foster API
router.post('/:petId/unsave', checkToken, unsavePet); //Unsave Pet API
router.put('/:petId/:userId', isAdmin, uploadImage.single('picture'), validateBody(Schemas.petSchemaFJS), editPet); //Edit Pet API
router.delete('/:petId', checkIsAdmin, deletePet); //Delete Pet API

module.exports = router;