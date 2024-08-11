import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({name,price,description,image}) => {

  // const [itemCount, setitemCount] = useState(0);
  const{url} = useContext(StoreContext);

  return (
    <div  className='food-item'>
        <div className='food-item-img-container'>
            
          <img className='food-item-image' src={url+"/images/"+image} alt=''/>
        

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className='food-desc'>{description}</p>
            <p className='food-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem
