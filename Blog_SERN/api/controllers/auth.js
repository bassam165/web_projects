const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res) => {
    //check existing register
    const q = 'SELECT * FROM user WHERE email=? or username=?'
    db.query(q,[req.body.email, req.body.name], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exist")

        //has pas
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        //insert into table
        const q = "INSERT INTO user(`username`,`email`,`password`) VALUE(?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(q,[values],(err,data) => {
            if(err) return res.json(err)
            return res.status(200).json("user has created")
        })
    } )
}

const login = (req,res) => {
    //check exist or not user
    const q = "SELECT * FROM user WHERE username = ?"

    db.query(q, [req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.length===0) return res.status(404).json("user not fuond")

        //check pass
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
        if(!isPasswordCorrect) return res.status(400).json("worng user or passorf")

        const token = jwt.sign({id:data[0].id}, "jwtkey")
        const {password, ...other} = data[0]

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other)
    })
}

const logout = (req,res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("user loged pout")
}

module.exports = {register,login,logout}