import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Login() {
  const [inputs,setInputs] = useState({
    username:"",
    password:""
  })

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handlerChanged = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='flex flex-col justify-center align-center items-center h-screen bg-green-100'>
        <h1 className='text-xl font-bold
        text-green-500 mb-5'>Login</h1>
        <form action="" className='flex flex-col p-10 gap-5 bg-slate-50 rounded-xl'>
            <input required className='shadow border-none appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Enter Username' name='username' onChange={handlerChanged}/>
            <input required className='shadow border-none appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder='Enter password' name='password' onChange={handlerChanged}/>
            <button onClick={handleSubmit} className='bg-green-500 w-100 rounded-xl p-1 text-xl text-white'>Login</button>
            <span className=''>Do not have an account?<Link className='p-2 text-xl text-green-900' to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login