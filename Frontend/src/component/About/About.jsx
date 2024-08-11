import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const images = [
    "/firca-ile-zemin-izolasyon-yapan-adam.jpg",
    "/depositphotos_283451190-stock-photo-installing-decorative-ceiling-molding-home.jpg",
    "/depositphotos_469587564-stock-photo-worker-applying-epoxy-polyurethane-flooring.jpg",
    "/istockphoto-1470551770-612x612.jpg"
    // Add more image paths here
  ];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImageIndex2((prevIndex) => {
        // Ensure the second image is different from the first one
        let nextIndex = (prevIndex + 1) % images.length;
        if (nextIndex === currentImageIndex1) {
          nextIndex = (nextIndex + 1) % images.length;
        }
        return nextIndex;
      });
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length, currentImageIndex1]);

  return (
    <div className="about">
      <div className="about-panel">
        <div className="about-info">
          <h1>About Us</h1>
          <h2>We Are Trusted Company Since 2010</h2>
          <p>Angel High-Tech Polymers is a 14 years old Proprietorship Firm incorporated on 19-Sep-2010. The major activity of Angel High-Tech Polymers is services, sub-classified into services to epoxy, PU flooring, waterproofing, and many more activities related to flooring and coating. Angel High-Tech Polymers is classified as a micro-enterprise in the financial year 2023-24. It has its unit situated at Ballbhgarh, Haryana.</p>

        
          <h1>Benefits & Features</h1>
<p class="with-check">Resistant to stains and water</p>
<p class="with-check">Durability</p>
<p class="with-check">Appearance</p>
<p class="with-check">Cost effectiveness</p>
<p class="with-check">Strength</p>
<p class="with-check">Safety</p>
<p class="with-check">Eco-friendly</p>


          <img className="about-content-img fade-in" src={images[currentImageIndex1]} alt="About Content" />
        </div>

        <div className="about-img  fade-in">
          <img src={images[currentImageIndex2]} alt="About" />
        </div>
      </div>
    </div>
  );
}

export default About;


