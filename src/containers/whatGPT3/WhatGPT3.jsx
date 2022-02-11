import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3_whatgpt3-feature">
      <Feature title="What is GPT-3" text="Our mission is to organize the world’s information and make it universally accessible and useful. AI is helping us do that in exciting new ways, solving problems for our users, our customers, and the world." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond our imagination
      </h1>
      <p>Explore The Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Publications" text="We publish hundreds of research papers in any given year. Publishing enables us to collaborate as a whole and share our thoughts and ideas within the scientific community." />
      <Feature title="Research Areas" text="Fundamental research and influencing product development is how we best make an impact on technology, used by billions of people every day." />
      <Feature title="Tools & Datasets" text="We create tools and datasets and make them widely available to the broader research community with the goal of building a more collaborative and sustainable ecosystem." />
    </div>
  </div>
);

export default WhatGPT3;
