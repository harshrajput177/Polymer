import React from 'react';
import './Searchbar.css';
import { assets } from '../../assets/assets';

const Searchbar = ({ setSearch, category, setCategory }) => {
  return (
    <div className='search-box'>
      <div className='seach-container'>

        <div className='search-title'>
          <h2>Search</h2>
          <img onClick={() => setSearch(false)} src={assets.cross_icon} className='cross-icon' />
        </div>

        <div className='search-input'>
          <div className='input-container'>
            <input type="text" placeholder='Search' className='input-box' />
            <img src={assets.search_icon} alt="" className='icon' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Searchbar;
