import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [select , setselect] = useState("List-items");
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add'  onClick={()=>setselect("Add-items") } className={`sidebar-option ${select === "Add-items" ? "actives" :""}` }>
          <img src={assets.add_icon} alt="" />
        <p>Add-list</p>
        </NavLink>
        <NavLink to='/list' onClick={()=>setselect("List-items") } className={`sidebar-option ${select === "List-items" ? "actives" :""}` }>
        <img src={assets.order_icon} alt="" />
         <p>List-items</p>
        </NavLink>
        <NavLink  to="/orders" onClick={()=>setselect("Orders") } className={`sidebar-option ${select === "Orders" ? "actives" :""}` }>
        <img src={assets.order_icon} alt="" />
        <p>Orders</p>
        </NavLink>
      </div> 
    </div>
  )
}
export default Sidebar
