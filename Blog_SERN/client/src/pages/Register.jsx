import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"

function Register() {

  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const handlerChanged = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try{
      await axios.post("/auth/register",inputs)
      navigate("/login")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='flex flex-col justify-center align-center items-center h-screen bg-green-100'>
        <h1 className='text-xl font-bold
        text-green-500 mb-5'>Register</h1>
        <form action="" className='flex flex-col p-10 gap-5 bg-slate-50 rounded-xl'>
            <input required className='shadow border-none appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Enter Username' name='username' onChange={handlerChanged}/>
            <input required className='shadow border-none appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline' type="email" placeholder='Enter Email' name='email' onChange={handlerChanged}/>
            <input required className='shadow border-none appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder='Enter password' name='password' onChange={handlerChanged}/>
            <button onClick={handleSubmit} className='bg-green-500 w-100 rounded-xl p-1 text-xl text-white'>Register</button>
            <span className=''>Have an account?<Link className='p-2 text-xl text-green-900' to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register