import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const contentArray = [
    {
      title1: "Discover Your",
      title2: "COVING",
      description: "Coving is a molding used to cover the junction between walls and ceilings, providing a smooth, curved transition.",
      buttonText: "View More",
      imageUrl:"/depositphotos_283451190-stock-photo-installing-decorative-ceiling-molding-home.jpg"
    },
    {
      title1: "Experience the",
      title2: "Waterproofing",
      description: "Waterproofing is the process of making a structure or surface resistant to water penetration and damage.",
      buttonText: "Explore Now",
      imageUrl: "/depositphotos_469587564-stock-photo-worker-applying-epoxy-polyurethane-flooring.jpg"
    },
    {
      title1: "Experience the",
      title2: "Epoxy & Epoxy Flooring",
      description: "Epoxy is a strong resin, and epoxy flooring uses it to create durable, seamless, and resistant surfaces",
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

