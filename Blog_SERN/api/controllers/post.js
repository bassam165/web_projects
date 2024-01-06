const db = require('../db')
const jwt = require('jsonwebtoken')

const getPosts = (req,res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT *FROM posts"

    db.query(q, [req.query.cat], (err,data) => {
        if(err) return res.send(err) 
        return res.status(200).json(data)
    })

}

const getPost = (req,res) => {
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM user u JOIN posts p ON u.id=p.uid WHERE p.id=?"

    db.query(q,[req.params.id], (err,data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data[0])
    })
}

const addPost = (req,res) => {
    res.json("form controller")
}

const deletePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("nto authenictted")

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(403).json("token is not valud")
        const postId = req.para.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid`=?"
        db.query(q,[postId,userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("you can not delt")
            return res.json("post deleted")
        })
    })
}

const updatePost = (req,res) => {
    res.json("form controller")
}

module.exports = {getPosts, getPost,addPost,deletePost,updatePost}