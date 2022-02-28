export { };
const petsDAO = require('../DAO/petsDAO')

export async function addPet(req, res) {
    try {
        const allPets = await petsDAO.addPet(req.body, req.file);
        if (allPets.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(allPets)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getPetById(req, res) {
    try {
        const { id } = req.params;
        const pet = await petsDAO.getPetById(id);
        res.send({ message: "Details of the pet founded", pet });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function editPet(req, res) {
    try {
        const { petId } = req.params;
        const allPets = await petsDAO.editPet(petId, req.body, req.file);
        res.send(allPets)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getPets(req, res) {
    try {
        const allPets = await petsDAO.getAllPets(req.query, req.admin);
        if (allPets.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(allPets)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function returnPet(req, res) {
    try {
        //Pet Id:
        const { petId } = req.params;
        //User Id:
        const { userId } = req.body;

        const updatedPet = await petsDAO.returnThePet(petId, userId);
        if (updatedPet.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(updatedPet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function deletePet(req, res) {
    try {
        const { petId } = req.params;

        const deletedPet = await petsDAO.deleteThePet(petId);
        if (deletedPet.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(deletedPet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function savePet(req, res) {
    try {
        //Pet Id:
        const { petId } = req.params;
        //User Id:
        const { userId } = req.body;
        const savePet = await petsDAO.saveThePet(petId, userId);
        if (savePet.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(savePet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function unsavePet(req, res) {
    try {
        //Pet Id:
        const { petId } = req.params;
        //User Id:
        const { userId } = req.body;

        const unsavePet = await petsDAO.unsaveThePet(petId, userId);
        if (unsavePet.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(unsavePet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getPetsByUser(req, res) {
    try {
        const { userId } = req.params
        const userPets = await petsDAO.getTheUserPets(userId);
        if (userPets.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(userPets)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getPetsOwnedByUser(req, res) {
    try {
        const { userId } = req.params
        const userPets = await petsDAO.petsOwnedByUser(userId);
        if (userPets.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(userPets)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function adoptOrFosterPet(req, res) {
    try {
        //Pet Id:
        const { petId } = req.params;
        //User Id:
        const { userId, adoptionStatus } = req.body;

        const adoptOrFosterPet = await petsDAO.adoptOrFosterThePet(petId, userId, adoptionStatus);
        await petsDAO.changeAdoptionStatusPet(petId, adoptionStatus);
        if (adoptOrFosterPet.error) {
            res.status(500).send('Error retrieving information from Data Base');
        }
        res.send(adoptOrFosterPet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}