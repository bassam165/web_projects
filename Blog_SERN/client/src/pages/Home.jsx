import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[cat])
  // const posts= [
  //   {
  //     id:1,
  //     tittle: "lorem ispum",
  //     desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs",
  //     img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  //   },
  //   {
  //     id:2,
  //     tittle: "lorem ispum",
  //     desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs",
  //     img: "https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg"
  //   },
  //   {
  //     id:3,
  //     tittle: "lorem ispum",
  //     desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs ",
  //     img: "https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg"
  //   }
  // ]
  return (
    <div className='home'>
      <div className='mt-8 flex flex-col gap-5'>
        {posts.map(post=>(
          <div className='flex gap-5' key={post.id}>
            <div className='flex-2 w-full max-h-400 '>
              <img className='h-80 w-160 object-cover' src={post.img} alt="" />
            </div>
            <div className="flex-3">
              <Link to={`/post/${post.id}`}>
              <h1 className='text-3xl m-2'>{post.tittle}</h1>
              <p className='m-2'>{post.desc}</p>
              <button className='bg-green-300 rounded-lg p-2 m-2'>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home