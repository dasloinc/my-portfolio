import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/danielbw.jpg';
import Button from './Button';
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
          <PText>
            Currently Daniel works as a Risk Management and Internal Audit
            Consultant at KPMG. Daniel is a Full Stack Web Developer, graduate
            of University of Toronto, complimented by a background in
            Hospitality and Logistics. Part of his knowledge is MERN stack
            applications among other various technologies. He managed teams and
            projects from his time as Operational Manager and Managing Director
            in the past 6 years. Known as a logical problem-solver, team player
            and passionate to learn the latest cutting-edge technologies. He
            aims to further develop his skill set, and to continue to grow and
            collaborate in the tech industry.
          </PText>
          <Button btnLink="/projects" />
        </div>
      </div>
    </div>
  );
}
