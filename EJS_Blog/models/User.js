//name, email, profile

const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type:String,
        trim:ture,
        maxlength:30,
        required: true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:Schema.Types.ObjectId,
        ref:'profile'
    }
},{
    timestamps:true
})

const User = model('User',userSchema)
module.exports = User