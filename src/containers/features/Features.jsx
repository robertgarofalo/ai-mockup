import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'What is Machine Learning?',
    text: 'Learn the fundamental of Machine Learning and see how it works under the hood.',
  },
  {
    title: 'AI Experiments',
    text: 'Explore how machine learning functions through live experiments including drawings, language practice, music and more. No code required.',
  },
  {
    title: 'Machine Learning - Make sense of the weirdness',
    text: 'Discover how machine learning can improve our lives through computers and other things we use them for.',
  },
  {
    title: 'Solving real world problems with Machine Learning',
    text: 'From helping Doctors in Mumbai diagnose eye disease to helping farmers in third world countries, machine learning is shaping the way we use code to solve real world problems.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Introducing the benefits of AI to the community.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={`${item.title}_${index}`} />
      ))}
    </div>
  </div>
);

export default Features;
