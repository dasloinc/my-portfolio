import React from 'react';
import HeroImg from '../assets/images/daniel_b&w.jpg';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero-heading">
          <span>Hello, this is</span>
          <span>Daniel Slobodscoy</span>
        </h1>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero-info">
          <PText />
        </div>
      </div>
    </div>
  );
}
