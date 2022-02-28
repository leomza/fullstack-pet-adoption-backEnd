var mongoose = require('mongoose');
var petsSchema = mongoose.Schema({
    petType: { type: String, "enum": ['dog', 'cat'], required: true },
    petName: { type: String, required: true },
    adoptionStatus: { type: String, "enum": ['adopted', 'fostered', 'available'], required: true },
    picture: { type: String },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    color: { type: String },
    bio: { type: String },
    hypoallergenic: { type: Boolean, required: true },
    dietaryRestrictions: { type: String },
    breed: { type: String, required: true },
    createdDate: { type: Date, "default": Date.now() }
});
//Say to Mongo that I going to register a pet with this schema:
module.exports = mongoose.model('Pet', petsSchema);
