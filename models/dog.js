const mongoose = require('mongoose');

// might need to add a category note for later

// re-use the dogSchema
const dogSchema = require('./dogSchema');

module.exports = mongoose.model('Dog', dogSchema);