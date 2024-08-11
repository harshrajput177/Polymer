import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload= () => {
  return (
    <div className='AppDownload'  id='AppDownload'   >
      <p>For better experience Download <br></br>Jambo</p>
      <div className="AppDownload-palteform">
      <img src={assets.app_store} alt='' />
      <img src={assets.play_store} alt='' />
      </div>
    </div>
  )
}

export default AppDownload
