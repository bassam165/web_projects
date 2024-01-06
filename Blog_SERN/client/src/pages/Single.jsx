import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import {AuthContext} from '../context/authContext'

function Single() {
  const [post, setPost] = useState({})

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[postId])

  const handleDelete = async()=>{
    try{
    await axios.delete(`/posts/${postId}`)
    navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='flex gap-5'>
      <div className='w-2/3'>
        <img className='object-cover' src={post?.img} alt="" />
        <div className=''>
           <img className='h-20 w-20 rounded-full' src={post.userImg} alt="" />
          <div className=''>
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username===post.username && (<div className='flex'>
            <Link to={`/write?edit=2`}>
            <img className='h-8 w-8' src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png" alt="" />
            </Link>
            <img onClick={handleDelete} className='h-8 w-8' src="https://cdn-icons-png.flaticon.com/512/3807/3807871.png" alt="" />
          </div>)}
        </div>
        <h1 className='text-3xl'>{post.title}</h1>
        <p className='text-justify'>{post.desc}</p>
      </div>
      <div className='w-1/3'>
        <Menu cat={post.cat}/>
      </div>
    </div>
  )
}

export default Single