const {Schema,model} = require('mongoose')
 const postSchema = new Schema({
    tittle:{
        type:String,
        required:true,
        trim:true,
        maxlength:100
    },
    body:{
        type:String,
        required:true
    },
    auther:{
        type:Schema.Types.ObjectId,
        red:'User',
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    thumbnail: String,
    readTime: String,
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId],
    comments: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
 },{timestamps:true})

 const Post = model('Post',postSchema)
  module.exports = Post