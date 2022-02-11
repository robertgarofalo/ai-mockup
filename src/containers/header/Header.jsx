import React from 'react';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import hero from '../../assets/hero.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Advancing AI for everyone</h1>
      <p>Our research groups are advancing the state of the art in computer science and making discoveries that empower billions of users every day.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={hero} />
    </div>
  </div>
);

export default Header;
