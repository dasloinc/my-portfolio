import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/Profile3_b&w.jpg';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  //added
  .aboutSection-right {
    height: 550px;
    width: 500px;
  }
  .aboutSection-left,
  .aboutsection-right {
    flex: 1;
    margin: 2rem;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0px;
  }
  .aboutSection-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection-left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            Currently Daniel works as a Risk Management & Internal Audit
            Consultant at KPMG. Daniel is a Full Stack Web Developer
            complimented by a background in Hospitality & Logistics. Daniel
            managed teams and projects from his time as Operational Manager and
            Managing Director in the past 6 years. Known as a logical
            problem-solver, team player and passionate to learn the latest
            cutting-edge technologies. He aims to further develop his skill set,
            and to continue to grow and collaborate in the tech industry.
          </PText>
          <div className="aboutSection-buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read more" outline />
          </div>
        </div>
        <div className="aboutSection-right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
