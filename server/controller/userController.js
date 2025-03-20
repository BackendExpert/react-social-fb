const UserData = require('../models/UserData');
const UserActivity = require('../models/UserActivity')

const userController = {
    updateCoverImage: async(req, res) => {
        try{
            const email = req.params.email;
            const coverImg = req.file.path;

            const CoverImgUpdate = await UserData.findOneAndUpdate(
                { email: email },
                { $set: { coverimg: coverImg } }, 
                { new: true } 
            );

            if(CoverImgUpdate){
                const newactivity = new UserActivity({
                    email: email,
                    activity: "Update Cover Image"
                })

                if(newactivity){
                    return res.json({ Status: "Success"})
                }
            }
        }
        catch(err){
            console.log(err)
        }
    },

    updateProfileImage: async(req, res) => {
        try{
            const email = req.params.email;
            const profileimg = req.file.path;

            const ProfileImgeUpdate = await UserData.findOneAndUpdate(
                { email: email },
                { $set: { profileimg: profileimg } }, 
                { new: true } 
            );

            if(ProfileImgeUpdate){
                const newactivity = new UserActivity({
                    email: email,
                    activity: "Update Profile Image"
                })

                if(newactivity){
                    return res.json({ Status: "Success"})
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = userController;