const {Schema, model} = require('mongoose')

const profileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tittle:{
        type:String,
        trim:true,
        maxlength:100
    },
    bio:{
        type:String,
        trim:true,
        maxlength:500
    },
    profilePic:String,
    links:{
        website:String,
        facebook:String,
        github:String
    },
    posts:[
        {
        type:Schema.Types.ObjectId,
        ref:'post'
        }
    ],
    bookmark:[
        {
            type:Schema.Types.ObjectId,
            ref:'post'
        }
    ]
},{timestamps:true})

const Profile = model('Profile',profileSchema)

module.exports = Profile