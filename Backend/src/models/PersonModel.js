const {Schema, model} = require('mongoose')

const PersonSchema = new Schema({
    Name : String,
    jobTitle: String,
    gender: String,
    zodiacSign: String,
    bio: String,
    jobArea: String,
    image: String
});

module.exports = model('Persona', PersonSchema);