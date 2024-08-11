import React, { useEffect, useState } from 'react';
import './Data.css'; // Add your CSS styling here

const Statistics = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [expertTechnicians, setExpertTechnicians] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
    const incrementNumbers = (target, setter) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100); // Increment by a fraction of the target
        if (count >= target) {
          clearInterval(interval);
          setter(target);
        } else {
          setter(count);
        }
      }, 50); // Update every 50 milliseconds
    };

    incrementNumbers(14, setYearsExperience);
    incrementNumbers(80, setExpertTechnicians);
    incrementNumbers(170, setSatisfiedClients);
    incrementNumbers(200, setCompletedProjects); // Adjust this value as needed
  }, []);

  return (
    <div className="statistics">
      <div className="stat-item">
        <img src="/pngtree-simple-style-correct-symbol-icon-material-image_2291415.jpg" alt="" />
        <h2>{yearsExperience} 
          <br></br>Years Experience</h2>
      </div>
      <div className="stat-item">
      <img src="/423-4236942_operational-support-technician-operational-support-icon-clipart.png" alt="" />
        <h2>{expertTechnicians}
          <br /> Expert Technicians</h2>
      </div>
      <div className="stat-item">
      <img src="/pngtree-coustomer-satisfaction-line-icon-vector-png-image_6739559.png" alt="" />
        <h2>{satisfiedClients}
          <br /> Satisfied Clients</h2>
      </div>
      <div className="stat-item">
      <img src="/images.png" alt="" />
        <h2>{completedProjects}
          <br /> Completed Projects</h2>
      </div>
    </div>
  );
};

export default Statistics;
