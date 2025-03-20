const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    coverimg: { type: String, required: true },
    profileimg: { type: String, required: true },
    
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports = UserData;