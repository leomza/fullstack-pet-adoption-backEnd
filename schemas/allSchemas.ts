const S = require('fluent-json-schema')

//Use Fluent to create and validate the schemas
const ROLE = {
    USER: 'user',
    ADMIN: 'admin',
}

export const signupSchemaFJS = S.object()
    .prop('email', S.string().format(S.FORMATS.EMAIL).required())
    .prop('password', S.string().minLength(6).required())
    .prop('repassword', S.string().minLength(6).required())
    .prop('firstName', S.string().minLength(4).required())
    .prop('lastName', S.string().minLength(4).required())
    .prop('phoneNumber', S.string().minLength(4).required())
    .prop('bio', S.string())
    .prop('role', S.string().enum(Object.values(ROLE)))
    .prop('savedPets', S.array().items(S.string()))
    .prop('adoptedPets', S.array().items(S.string()))
    .prop('fosteredPets', S.array().items(S.string()))
    .valueOf();

export const loginSchemaFJS = S.object()
    .prop('email', S.string().format(S.FORMATS.EMAIL).required())
    .prop('password', S.string().minLength(6).required())
    .valueOf();

const ADOPTIONSTATUS = {
    ADOPTED: 'adopted',
    FOSTERED: 'fostered',
    AVAILABLE: 'available'
}

const PETTYPE = {
    CAT: 'cat',
    DOG: 'dog'
}

export const petSchemaFJS = S.object()
    .prop('petType', S.string().enum(Object.values(PETTYPE)).required())
    .prop('petName', S.string().minLength(3).required())
    .prop('adoptionStatus', S.string().enum(Object.values(ADOPTIONSTATUS)).required())
    .prop('picture', S.string())
    .prop('height', S.number().required())
    .prop('weight', S.number().required())
    .prop('color', S.string())
    .prop('bio', S.string())
    .prop('hypoallergenic', S.boolean().required())
    .prop('dietaryRestrictions', S.string())
    .prop('breed', S.string().minLength(3).required())
    .valueOf();