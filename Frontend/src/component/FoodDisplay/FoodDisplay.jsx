import { useContext } from "react";
import './FoodDisplay.css';
import Fooditem from "../Fooditem/Fooditem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="food-display-container">
      {(!foodList || foodList.length === 0) ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="food-display" id="food-display">
          <div className="food-display-list">
            {foodList.map((items, index) => {
              if (category === 'All' || category === items.category){
                return (
                  <Fooditem
                    key={index}
                    _id={items._id}
                    name={items.name}
                    description={items.description}
                    price={items.price}
                    image={items.image}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;

