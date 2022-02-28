"use strict";
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
exports.__esModule = true;
exports.adoptOrFosterPet = exports.getPetsOwnedByUser = exports.getPetsByUser = exports.unsavePet = exports.savePet = exports.deletePet = exports.returnPet = exports.getPets = exports.editPet = exports.getPetById = exports.addPet = void 0;
var petsDAO = require('../DAO/petsDAO');
function addPet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allPets, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, petsDAO.addPet(req.body, req.file)];
                case 1:
                    allPets = _a.sent();
                    if (allPets.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(allPets);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addPet = addPet;
function getPetById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, pet, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, petsDAO.getPetById(id)];
                case 1:
                    pet = _a.sent();
                    res.send({ message: "Details of the pet founded", pet: pet });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    res.status(500).send(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPetById = getPetById;
function editPet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, allPets, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    petId = req.params.petId;
                    return [4 /*yield*/, petsDAO.editPet(petId, req.body, req.file)];
                case 1:
                    allPets = _a.sent();
                    res.send(allPets);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.editPet = editPet;
function getPets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allPets, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, petsDAO.getAllPets(req.query, req.admin)];
                case 1:
                    allPets = _a.sent();
                    if (allPets.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(allPets);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.status(500).send(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPets = getPets;
function returnPet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, userId, updatedPet, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    petId = req.params.petId;
                    userId = req.body.userId;
                    return [4 /*yield*/, petsDAO.returnThePet(petId, userId)];
                case 1:
                    updatedPet = _a.sent();
                    if (updatedPet.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(updatedPet);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.status(500).send(error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.returnPet = returnPet;
function deletePet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, deletedPet, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    petId = req.params.petId;
                    return [4 /*yield*/, petsDAO.deleteThePet(petId)];
                case 1:
                    deletedPet = _a.sent();
                    if (deletedPet.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(deletedPet);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    res.status(500).send(error_6.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deletePet = deletePet;
function savePet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, userId, savePet_1, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    petId = req.params.petId;
                    userId = req.body.userId;
                    return [4 /*yield*/, petsDAO.saveThePet(petId, userId)];
                case 1:
                    savePet_1 = _a.sent();
                    if (savePet_1.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(savePet_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    res.status(500).send(error_7.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.savePet = savePet;
function unsavePet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, userId, unsavePet_1, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    petId = req.params.petId;
                    userId = req.body.userId;
                    return [4 /*yield*/, petsDAO.unsaveThePet(petId, userId)];
                case 1:
                    unsavePet_1 = _a.sent();
                    if (unsavePet_1.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(unsavePet_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.error(error_8);
                    res.status(500).send(error_8.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.unsavePet = unsavePet;
function getPetsByUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userPets, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.params.userId;
                    return [4 /*yield*/, petsDAO.getTheUserPets(userId)];
                case 1:
                    userPets = _a.sent();
                    if (userPets.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(userPets);
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.error(error_9);
                    res.status(500).send(error_9.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPetsByUser = getPetsByUser;
function getPetsOwnedByUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userPets, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.params.userId;
                    return [4 /*yield*/, petsDAO.petsOwnedByUser(userId)];
                case 1:
                    userPets = _a.sent();
                    if (userPets.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(userPets);
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _a.sent();
                    console.error(error_10);
                    res.status(500).send(error_10.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPetsOwnedByUser = getPetsOwnedByUser;
function adoptOrFosterPet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, _a, userId, adoptionStatus, adoptOrFosterPet_1, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    petId = req.params.petId;
                    _a = req.body, userId = _a.userId, adoptionStatus = _a.adoptionStatus;
                    return [4 /*yield*/, petsDAO.adoptOrFosterThePet(petId, userId, adoptionStatus)];
                case 1:
                    adoptOrFosterPet_1 = _b.sent();
                    return [4 /*yield*/, petsDAO.changeAdoptionStatusPet(petId, adoptionStatus)];
                case 2:
                    _b.sent();
                    if (adoptOrFosterPet_1.error) {
                        res.status(500).send('Error retrieving information from Data Base');
                    }
                    res.send(adoptOrFosterPet_1);
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _b.sent();
                    console.error(error_11);
                    res.status(500).send(error_11.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.adoptOrFosterPet = adoptOrFosterPet;
