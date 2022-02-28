"use strict";
exports.__esModule = true;
exports.petSchemaFJS = exports.loginSchemaFJS = exports.signupSchemaFJS = void 0;
var S = require('fluent-json-schema');
//Use Fluent to create and validate the schemas
var ROLE = {
    USER: 'user',
    ADMIN: 'admin'
};
exports.signupSchemaFJS = S.object()
    .prop('email', S.string().format(S.FORMATS.EMAIL).required())
    .prop('password', S.string().minLength(6).required())
    .prop('repassword', S.string().minLength(6).required())
    .prop('firstName', S.string().minLength(4).required())
    .prop('lastName', S.string().minLength(4).required())
    .prop('phoneNumber', S.string().minLength(4).required())
    .prop('bio', S.string())
    .prop('role', S.string()["enum"](Object.values(ROLE)))
    .prop('savedPets', S.array().items(S.string()))
    .prop('adoptedPets', S.array().items(S.string()))
    .prop('fosteredPets', S.array().items(S.string()))
    .valueOf();
exports.loginSchemaFJS = S.object()
    .prop('email', S.string().format(S.FORMATS.EMAIL).required())
    .prop('password', S.string().minLength(6).required())
    .valueOf();
var ADOPTIONSTATUS = {
    ADOPTED: 'adopted',
    FOSTERED: 'fostered',
    AVAILABLE: 'available'
};
var PETTYPE = {
    CAT: 'cat',
    DOG: 'dog'
};
exports.petSchemaFJS = S.object()
    .prop('petType', S.string()["enum"](Object.values(PETTYPE)).required())
    .prop('petName', S.string().minLength(3).required())
    .prop('adoptionStatus', S.string()["enum"](Object.values(ADOPTIONSTATUS)).required())
    .prop('picture', S.string())
    .prop('height', S.number().required())
    .prop('weight', S.number().required())
    .prop('color', S.string())
    .prop('bio', S.string())
    .prop('hypoallergenic', S.boolean().required())
    .prop('dietaryRestrictions', S.string())
    .prop('breed', S.string().minLength(3).required())
    .valueOf();
