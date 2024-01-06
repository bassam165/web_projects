import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Menu({cat}) {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[cat])
    // const posts= [
    //     {
    //       id:1,
    //       tittle: "lorem ispum",
    //       desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs",
    //       img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    //     },
    //     {
    //       id:2,
    //       tittle: "lorem ispum",
    //       desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs",
    //       img: "https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg"
    //     },
    //     {
    //       id:3,
    //       tittle: "lorem ispum",
    //       desc: "lorem ispum jlkj lkjl jlsfoei sfl eisfs ",
    //       img: "https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg"
    //     }
    //   ]
  return (
    <div>
        <p>other post you may like</p>
        {posts.map(post=>(
            <div className='mt-5' key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.tittle}</h2>
                <button className='bg-green-300 rounded-lg p-2 m-2' >Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu