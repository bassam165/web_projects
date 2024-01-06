const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true,'usename is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
},{timestamps:true})

const userModel = mongoose.model('User',useSchema)

module.exports = userModel