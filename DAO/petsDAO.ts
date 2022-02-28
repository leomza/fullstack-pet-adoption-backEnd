const petsSchema = require('../models/petModels')
const usersSchema = require('../models/userModels')

class PetsDAO {
    static async getAllPets(queryParams, isAdmin) {
        try {
            Object.keys(queryParams).forEach(function (key) {
                if (queryParams[key] == '')
                    delete queryParams[key];
            });

            console.log(queryParams);
            if (Object.keys(queryParams).length === 0 && !isAdmin) {
                const queryResult = await petsSchema.find({ adoptionStatus: 'available' })
                return queryResult;
            } else {
                let queryResult = await petsSchema.find()

                if (queryParams.petName) {
                    let regex = new RegExp(queryParams.petName, 'i');
                    queryResult = queryResult.filter(pet => regex.test(pet.petName))
                }

                if (queryParams.petType) queryResult = queryResult.filter(pet => pet.petType === queryParams.petType);

                if (queryParams.minHeight) queryResult = queryResult.filter(pet => pet.height > queryParams.minHeight);
                if (queryParams.maxHeight) queryResult = queryResult.filter(pet => pet.height < queryParams.maxHeight);

                if (queryParams.weight) queryResult = queryResult.filter(pet => pet.weight == queryParams.weight);

                if (queryParams.adoptionStatus) queryResult = queryResult.filter(pet => pet.adoptionStatus === queryParams.adoptionStatus);

                return queryResult;
            }

        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getPetById(id) {
        try {
            const queryResult = await petsSchema.findOne({ _id: id })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async addPet(petToAdd, petPicture) {
        try {
            const { petType, height, weight, petName, adoptionStatus, color, bio, hypoallergenic, dietaryRestrictions, breed, owner } = petToAdd
            const petImage = petPicture ? petPicture.filename : 'generalPet.jpg'

            const pet = {
                "petType": petType,
                "petName": petName,
                "adoptionStatus": adoptionStatus,
                "picture": petImage,
                "height": height,
                "weight": weight,
                "color": color,
                "bio": bio,
                "hypoallergenic": hypoallergenic,
                "dietaryRestrictions": dietaryRestrictions,
                "breed": breed,
                "owner": owner
            }
            await petsSchema.create(pet)
            const queryResult = await petsSchema.find();
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async editPet(petId, petToEdit, petPicture) {
        try {
            const petImage = petPicture ? petPicture.filename : 'generalPet.jpg'
            await petsSchema.findByIdAndUpdate(petId, { petType: petToEdit.petType, petName: petToEdit.petName, adoptionStatus: petToEdit.adoptionStatus, picture: petImage, height: petToEdit.height, weight: petToEdit.weight, color: petToEdit.color, bio: petToEdit.bio, hypoallergenic: petToEdit.hypoallergenic, dietaryRestrictions: petToEdit.dietaryRestrictions, breed: petToEdit.breed });

            const queryResult = await petsSchema.find();
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async returnThePet(petId, userId) {
        try {
            await petsSchema.findByIdAndUpdate(petId, { $set: { adoptionStatus: 'available' } });
            const queryResult = await usersSchema.updateOne({ _id: userId }, { $pull: { adoptedPets: petId, fosteredPets: petId } });
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async deleteThePet(petId) {
        try {
            const queryResult = await petsSchema.findByIdAndDelete(petId);
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async saveThePet(petId, userId) {
        try {
            const queryResult = await usersSchema.updateOne({ _id: userId }, { $addToSet: { savedPets: petId } });
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async unsaveThePet(petId, userId) {
        try {
            const queryResult = await usersSchema.updateOne({ _id: userId }, { $pull: { savedPets: petId } });
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getTheUserPets(userId) {
        try {
            const queryResult = await usersSchema.findById(userId)
            const result = await petsSchema.find().where('_id').in(queryResult.savedPets).exec();
            return result;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async petsOwnedByUser(userId) {
        try {
            const queryResult = await usersSchema.findById(userId)
            const result = await petsSchema.find({ $or: [{ '_id': { '$in': queryResult.adoptedPets } }, { '_id': { '$in': queryResult.fosteredPets } }] });
            return result;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async adoptOrFosterThePet(petId, userId, adoptionStatus) {
        try {
            if (adoptionStatus === 'adopted') {
                const queryResult = await usersSchema.updateOne({ _id: userId }, { $addToSet: { adoptedPets: petId } });
                return queryResult
            } else if (adoptionStatus === 'fostered') {
                const queryResult = await usersSchema.updateOne({ _id: userId }, { $addToSet: { fosteredPets: petId } });
                return queryResult
            }
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async changeAdoptionStatusPet(petId, adoptionStatus) {
        try {
            const queryResult = await petsSchema.findByIdAndUpdate(petId, { adoptionStatus });
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }
}

module.exports = PetsDAO;