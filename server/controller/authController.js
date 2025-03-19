const nodemailer = require('nodemailer');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserActivity = require('../models/UserActivity');
const validator = require('validator')
const jwt = require('jsonwebtoken')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const authController = {
    signup: async(req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            if (!validator.isEmail(email)) {
                return res.json({ error: "Invalid email format" });
            }

            if (password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters" });
            }

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newuser = new User({
                username: username,
                email: email,
                password: hashpass,
            })

            const resultuser = await newuser.save()

            if(resultuser){
                const newactivity = new UserActivity({ 
                    email: email,
                    activity: 'User Registation'
                })

                const resultactivity = await newactivity.save()

                if(resultactivity){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error while creating Activity"})
                }
            }
            else{
                return res.json({ Error: "Internal Server Error While Create User"})
            }
        }
        
        catch(err){
            console.log(err)
        }
    },

    signin: async(req, res) => {
        try{
            const  {
                email,
                password 
            } = req.body

            const checkuser = await User.findOne({ email: email })
            
            if(!checkuser){
                return res.json({ Error: "User is not Exists on System"})
            }

            const checkpass = await bcrypt.compare(password, checkuser.password)

            if(!checkpass){
                return res.json({ Error: "Password not Match"})
            }

            const newactivity = new UserActivity({
                email: email,
                activity: 'User Login'
            })
            
            const resultactivity = await newactivity.save()

            if(resultactivity){
                const token = jwt.sign({ id: checkuser._id, role:checkuser.role }, process.env.JWT_SECRET);
                return res.json({ Status: "Success", Result: checkuser, Token: token })
            }
            else{
                return res.json({ Error: 'Internal Server Error while creating Activity'})
            }
            
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;