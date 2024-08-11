import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const contentArray = [
    {
      title1: "Discover Your",
      title2: "Next Favorite Dish",
      description: "At JAMBO, we pride ourselves on offering a diverse menu that caters to every craving. From authentic Italian pizzas to spicy Indian curries, and fresh sushi to hearty American burgers, our selection spans cuisines from around the globe",
      buttonText: "View More",
      imageUrl:"/depositphotos_283451190-stock-photo-installing-decorative-ceiling-molding-home.jpg"
    },
    {
      title1: "Experience the",
      title2: "Taste of Tradition",
      description: "Our chefs create magic by blending traditional recipes with modern techniques to bring you the best of both worlds. Whether you’re craving comfort food or something adventurous, we have it all.",
      buttonText: "Explore Now",
      imageUrl: "/depositphotos_469587564-stock-photo-worker-applying-epoxy-polyurethane-flooring.jpg"
    },
    {
      title1: "Savor the",
      title2: "Flavor of the World",
      description: "Dive into our exquisite collection of international cuisines. From the tangy and spicy to the sweet and savory, every dish is a journey to a different part of the world.",
      buttonText: "Discover More",
      imageUrl: "/firca-ile-zemin-izolasyon-yapan-adam.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % contentArray.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div 
      className='header' 
      style={{ backgroundImage: `url(${contentArray[currentContent].imageUrl})` }}>
      <div className='header-content'>
        <h2>{contentArray[currentContent].title1}</h2>
        <h2>{contentArray[currentContent].title2}</h2>
        <p>{contentArray[currentContent].description}</p>
        <button>{contentArray[currentContent].buttonText}</button>
      </div>
    </div>
  );
}

export default Header;

