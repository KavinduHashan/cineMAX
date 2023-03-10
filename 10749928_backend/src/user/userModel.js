const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// register
const userRegisterSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('userdetails', userRegisterSchema);



