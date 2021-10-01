import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/danielbw.jpg';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import SocialScrollDown from '../assets/images/scroll-down-arrow.svg';

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero-info {
    margin-top: -20rem;
  }
  .hero-social,
  .hero-scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero-social {
    left: 50px;
  }
  .hero-scrollDown {
    right: 50px;
  }
  .hero-social-indicator,
  .hero-scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      /* text-transform: uppercase; */
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero-scrollDown {
    img {
      max-width: 70px;
    }
  }
  .hero-social-text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        letter-spacing: 5px;
        margin-bottom: 2rem;
        /* transform: rotate(-90deg); */
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, this is</span>
            <span className="hero-name">Daniel</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero-info">
            <PText>
              Currently Daniel works as a Risk Management & Internal Audit
              Consultant at KPMG. Daniel is a Full Stack Web Developer
              complimented by a background in Hospitality & Logistics. Daniel
              managed teams and projects from his time as Operational Manager
              and Managing Director in the past 6 years. Known as a logical
              problem-solver, team player and passionate to learn the latest
              cutting-edge technologies. He aims to further develop his skill
              set, and to continue to grow and collaborate in the tech industry.
            </PText>
            <Button btnLink="/projects" btnText="see my work" />
          </div>
          <div className="hero-social">
            <div className="hero-social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero-social-text">
              <ul>
                <il>
                  <a
                    href="https://www.linkedin.com/in/daniel-slobodscoy-01075b178/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </il>
                <il>
                  <a
                    href="https://www.linkedin.com/in/daniel-slobodscoy-01075b178/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </il>
                <il>
                  <a
                    href="https://www.linkedin.com/in/daniel-slobodscoy-01075b178/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </il>
              </ul>
            </div>
          </div>
          <div className="hero-scrollDown">
            <p>Scroll</p>
            <img src={SocialScrollDown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
