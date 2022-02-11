import React from 'react';
import './possibility.css';
// import possibilityImage from '../../assets/possibility.png';
import manImage from '../../assets/man.jpg';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={manImage} alt="Possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Building trust and responsibility with AI</h1>
      <p>AI has significant potential to help solve challenging problems, including by advancing medicine, understanding language, and fueling scientific discovery. </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
