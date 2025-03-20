const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    coverimg: { type: String },
    profileimg: { type: String },
    userBio: { type: String, maxlength: 500, default: 'This user has not updated their bio yet.'},
    uname: { type: String },
    worksat: { type: String, default: 'Not specified' },
    studyat: { type: String, default: 'Not specified' },
    livein: { type: String, default: 'Not specified' },
    fromuser: { type: String, default: 'Not specified' },
    statususer: { type: String, default: 'Not specified' },
    followers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
    }],
    followings: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    }],
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports = UserData;