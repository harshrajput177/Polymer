import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
const Navbar = () => {
  return (
  <div className="navbar">
    <div className="logo-para">
      <h2>Angle High-Teach</h2>
  <p>Admin panel</p>
    </div>
 
  <img  className="profile" src={assets.profile_image} alt="" />
  </div>
  )
}

export default Navbar
