import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout();
  };
  return (
    <div className='p-5 flex justify-between items-center'>
      <div className='text-4xl'>logo</div>
      <div className=''>
        <Link className='m-2' to="/?cat=art">ART</Link>
        <Link className='m-2' to="/?cat=science">SCIENCE</Link>
        <Link className='m-2' to="/?cat=technology">TECHNOLOGY</Link>
        <Link className='m-2' to="/?cat=cinema">CINEMA</Link>
        <Link className='m-2' to="/?cat=design">DESIGN</Link>
        <Link className='m-2' to="/?cat=food">FOOD</Link>
        <span>{currentUser?.username}</span>
        {currentUser? <span onClick={handleLogout} className='m-2 cursor-pointer'>Logout</span> : <Link to={"/login"}>login</Link>}
        <span className='m-2 bg-green-300 rounded-full p-2 hover:bg-white'>
          <Link to="/write">Write</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar