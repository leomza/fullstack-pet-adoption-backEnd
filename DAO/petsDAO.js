var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var petsSchema = require('../models/petModels');
var usersSchema = require('../models/userModels');
var PetsDAO = /** @class */ (function () {
    function PetsDAO() {
    }
    PetsDAO.getAllPets = function (queryParams, isAdmin) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, queryResult, regex_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        Object.keys(queryParams).forEach(function (key) {
                            if (queryParams[key] == '')
                                delete queryParams[key];
                        });
                        console.log(queryParams);
                        if (!(Object.keys(queryParams).length === 0 && !isAdmin)) return [3 /*break*/, 2];
                        return [4 /*yield*/, petsSchema.find({ adoptionStatus: 'available' })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2: return [4 /*yield*/, petsSchema.find()];
                    case 3:
                        queryResult = _a.sent();
                        if (queryParams.petName) {
                            regex_1 = new RegExp(queryParams.petName, 'i');
                            queryResult = queryResult.filter(function (pet) { return regex_1.test(pet.petName); });
                        }
                        if (queryParams.petType)
                            queryResult = queryResult.filter(function (pet) { return pet.petType === queryParams.petType; });
                        if (queryParams.minHeight)
                            queryResult = queryResult.filter(function (pet) { return pet.height > queryParams.minHeight; });
                        if (queryParams.maxHeight)
                            queryResult = queryResult.filter(function (pet) { return pet.height < queryParams.maxHeight; });
                        if (queryParams.weight)
                            queryResult = queryResult.filter(function (pet) { return pet.weight == queryParams.weight; });
                        if (queryParams.adoptionStatus)
                            queryResult = queryResult.filter(function (pet) { return pet.adoptionStatus === queryParams.adoptionStatus; });
                        return [2 /*return*/, queryResult];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, ({ error: error_1.message })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.getPetById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, petsSchema.findOne({ _id: id })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, ({ error: error_2.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.addPet = function (petToAdd, petPicture) {
        return __awaiter(this, void 0, void 0, function () {
            var petType, height, weight, petName, adoptionStatus, color, bio, hypoallergenic, dietaryRestrictions, breed, owner, petImage, pet, queryResult, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        petType = petToAdd.petType, height = petToAdd.height, weight = petToAdd.weight, petName = petToAdd.petName, adoptionStatus = petToAdd.adoptionStatus, color = petToAdd.color, bio = petToAdd.bio, hypoallergenic = petToAdd.hypoallergenic, dietaryRestrictions = petToAdd.dietaryRestrictions, breed = petToAdd.breed, owner = petToAdd.owner;
                        petImage = petPicture ? petPicture.filename : 'generalPet.jpg';
                        pet = {
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
                        };
                        return [4 /*yield*/, petsSchema.create(pet)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, petsSchema.find()];
                    case 2:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, ({ error: error_3.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.editPet = function (petId, petToEdit, petPicture) {
        return __awaiter(this, void 0, void 0, function () {
            var petImage, queryResult, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        petImage = petPicture ? petPicture.filename : 'generalPet.jpg';
                        return [4 /*yield*/, petsSchema.findByIdAndUpdate(petId, { petType: petToEdit.petType, petName: petToEdit.petName, adoptionStatus: petToEdit.adoptionStatus, picture: petImage, height: petToEdit.height, weight: petToEdit.weight, color: petToEdit.color, bio: petToEdit.bio, hypoallergenic: petToEdit.hypoallergenic, dietaryRestrictions: petToEdit.dietaryRestrictions, breed: petToEdit.breed })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, petsSchema.find()];
                    case 2:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, ({ error: error_4.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.returnThePet = function (petId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, petsSchema.findByIdAndUpdate(petId, { $set: { adoptionStatus: 'available' } })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, usersSchema.updateOne({ _id: userId }, { $pull: { adoptedPets: petId, fosteredPets: petId } })];
                    case 2:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 3:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [2 /*return*/, ({ error: error_5.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.deleteThePet = function (petId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, petsSchema.findByIdAndDelete(petId)];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        error_6 = _a.sent();
                        console.error(error_6);
                        return [2 /*return*/, ({ error: error_6.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.saveThePet = function (petId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, usersSchema.updateOne({ _id: userId }, { $addToSet: { savedPets: petId } })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        error_7 = _a.sent();
                        console.error(error_7);
                        return [2 /*return*/, ({ error: error_7.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.unsaveThePet = function (petId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, usersSchema.updateOne({ _id: userId }, { $pull: { savedPets: petId } })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        error_8 = _a.sent();
                        console.error(error_8);
                        return [2 /*return*/, ({ error: error_8.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.getTheUserPets = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, result, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, usersSchema.findById(userId)];
                    case 1:
                        queryResult = _a.sent();
                        return [4 /*yield*/, petsSchema.find().where('_id')["in"](queryResult.savedPets).exec()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_9 = _a.sent();
                        console.error(error_9);
                        return [2 /*return*/, ({ error: error_9.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.petsOwnedByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, result, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, usersSchema.findById(userId)];
                    case 1:
                        queryResult = _a.sent();
                        return [4 /*yield*/, petsSchema.find({ $or: [{ '_id': { '$in': queryResult.adoptedPets } }, { '_id': { '$in': queryResult.fosteredPets } }] })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_10 = _a.sent();
                        console.error(error_10);
                        return [2 /*return*/, ({ error: error_10.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.adoptOrFosterThePet = function (petId, userId, adoptionStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, queryResult, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(adoptionStatus === 'adopted')) return [3 /*break*/, 2];
                        return [4 /*yield*/, usersSchema.updateOne({ _id: userId }, { $addToSet: { adoptedPets: petId } })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        if (!(adoptionStatus === 'fostered')) return [3 /*break*/, 4];
                        return [4 /*yield*/, usersSchema.updateOne({ _id: userId }, { $addToSet: { fosteredPets: petId } })];
                    case 3:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_11 = _a.sent();
                        console.error(error_11);
                        return [2 /*return*/, ({ error: error_11.message })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PetsDAO.changeAdoptionStatusPet = function (petId, adoptionStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, petsSchema.findByIdAndUpdate(petId, { adoptionStatus: adoptionStatus })];
                    case 1:
                        queryResult = _a.sent();
                        return [2 /*return*/, queryResult];
                    case 2:
                        error_12 = _a.sent();
                        console.error(error_12);
                        return [2 /*return*/, ({ error: error_12.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PetsDAO;
}());
module.exports = PetsDAO;
