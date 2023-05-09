const Schema = require('mongoose').Schema;

const dogSchema = new Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true},
    city: {type: String, required: true},
    price: {type: Number, required: true},
}, {
    timestamps: true
});

module.exports = dogSchema;