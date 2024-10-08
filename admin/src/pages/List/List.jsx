import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';



const List = () => {
  const [list , setList] = useState([]);
  const url = "https://polymer-backend.onrender.com"
  const fetchList = async()=>{
    const response = await axios.get(`${url}/food/list`);
    // console.log(response.data)
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('error');
    }
  }


  //remove 
  const removeHandle = async(foodId)=>{
    const response = await axios.post(`${url}/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
     toast.success(response.data.message)
    }
    else{
      toast.error('error');
    }
  } 

  useEffect(()=>{
    fetchList();
  },[])


  return (
    <div className='list add flex-col'>
       <h2>All Service List</h2>
       <div className="list-table">
        <div className="list-table-format  title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item , index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src = {`${url}/images/`+ item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p  onClick= {()=> removeHandle(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
       </div>
    </div>
  )
}
export default List
