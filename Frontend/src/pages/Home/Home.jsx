import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import About from '../../component/About/About'
import Service from '../../component/Service-panel/Service'
import Statistics from '../../component/DataIncre/Data'


const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
    
         <Header/>
        <ExploreMenu  category={category} setCategory={setCategory}  />
        <FoodDisplay  category={category}/>
        <About />
        <Statistics />
        <Service />
    </div>
  )
}

export default Home
