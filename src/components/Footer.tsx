import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { delay: 0.4 },
      //   scrollTrigger: {
      //     trigger: '.footer',
      //     start: 'top 0%',
      //     markers: true,
      //     toggleActions: 'play none none restart',
      //   },
    });

    timeline.from('.footer', {
    //   y: '+10',
      ease: 'power0.out',
        opacity: 0,
      marginTop: '-30'
    });
  }, []);
  return (
    <FooterWrapper className="footer container">
      <div className="links-wrapper">
        <p className="logo-icon">II</p>
        <div className="links">
          <p>Careers</p>
          <p>Blog</p>
          <p>Support</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
      <Button text="Signup" className="signup" />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links-wrapper,
  .links {
    display: flex;
  }

  .links-wrapper {
    gap: 4rem;
  }

  .links {
    gap: 2rem;
    & > * {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .signup {
    margin: 0;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`;
