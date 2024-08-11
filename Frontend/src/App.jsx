import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route ,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './component/Footer/Footer'
import AppDownload from './component/Appdownload/AppDownload'
import LoginPopUp from './component/LoginPopUp/LoginPopUp'
import Searchbar from './component/Searchbar.jsx/Searchbar'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setSearch] = useState(false);

  return (
    <>
    {showLogin?<LoginPopUp  setShowLogin={setShowLogin} />:<></>}
    {showSearch?<Searchbar  setSearch={setSearch} />:<></>}
    
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin}  setSearch={setSearch}/>
    <Routes>
      <Route path ="/" element={<Home />}></Route>
    </Routes>
    </div>
    <AppDownload /> 
    <Footer />
    </>
  )
}

export default App
