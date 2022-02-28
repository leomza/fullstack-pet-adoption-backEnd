const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    bio: { type: String, required: false, },
    role: { type: String, required: false, },
    savedPets: { type: Array, required: false, },
    adoptedPets: { type: Array, required: false, },
    fosteredPets: { type: Array, required: false, },
    createdDate: { type: Date, default: Date.now() }
})

//Say to Mongo that I going to register an user with this schema:
module.exports = mongoose.model('User', usersSchema)