import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'>

        <div className='footer-content-left'>
       <h1 className='jambo-logo'>Angle High-Tech</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae atque autem adipisci quo accusamus culpa eveniet maiores consequuntur aut eius illum,
             quae ipsam, non possimus dolores nesciunt voluptate ullam hic.</p>
       <div className="footer-social-icon">
       <a href='https://github.com/harshrajput177'><img src={assets.twitter_icon} alt=''/></a> 
       <a href='https://www.linkedin.com/in/harsh-rajput-06254523b/'> <img src={assets.facebook_icon} alt=''/></a>
        <img src={assets.linkedin_icon} alt=''/>
       </div>
       </div> 

       <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='footer-content-right'>
        <h2>Get In Touch</h2>
        <ul>
            <li>Mobile no : 9458006097</li>
            <li>Email id : harshrajput30411@gmail.com </li>
        </ul>
        </div>
       </div>
       <hr className='hr'></hr>
       <p className='footer-copyright'>Copyright 2024 @ Jambo.com - All Right Reserved</p>
       <hr></hr>
       <h2 className='h2-text'> Created by Harsh Kumar</h2>
    </div>
   
  )
}

export default Footer
