import React from 'react'
import './ExploreMenu.css'


const ExploreMenu = ({category, setCategory}) => {
  console.log(category);   //All
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Our Services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi, eveniet provident corrupti quidem assumenda rerum quaerat laboriosam culpa suscipit iusto,
         qui placeat aspernatur vitae temporibus ullam dolore impedit voluptate.</p>
    </div>

         
  )
}

export default ExploreMenu
