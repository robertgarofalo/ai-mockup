import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others</h1>
    </div>
    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="logo" />
        <p>1245 Address goes Here</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get In Touch</h4>
        <p>1254 Address goes Here</p>
        <p>085-132567</p>
        <p>info@ai.net</p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>© {new Date().getFullYear()} GPT-3. All rights reserved.</p>
    </div>
    <div className="portfolio-link">
      <p className="gradient__text">Made by <a href="https://www.robertgarofalo.com" target="_blank" rel="noreferrer">Robert Garofalo</a></p>
    </div>
  </div>
);

export default Footer;
