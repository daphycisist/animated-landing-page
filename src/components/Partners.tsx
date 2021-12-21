import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  DPIConCompany1,
  DPIConCompany2,
  DPIConCompany5,
} from '../assets/icons';
import Button from './Button';

const Partners = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { delay: 0.4 },
      scrollTrigger: {
        trigger: '.partner-heading',
        start: 'top-=500px 50%',
        markers: true,
        toggleActions: 'play none none restart',
      },
    });

    timeline
      .from('.partner-heading', {
        opacity: 0,
        ease: 'power0',
        // delay: .7
      })
      .from(
        ['.signup-wrapper', '.icons-wrapper'],
        {
          x: '-10',
          opacity: 0,
          stagger: 0.5,
        },
        '<.5'
      )
      .from(
        '.logo',
        {
          opacity: 0,
          ease: 'power4.out',
        },
        '<.4'
      )
      .from(
        '.signup-content-header',
        {
          opacity: 0,
          ease: 'power4.out',
          y: '-20',
        },
        '>0.2'
      )
      .from(
        '.signup-content-button',
        {
          opacity: 0,
          ease: 'power4.out',
          y: '-20',
        },
        '<0.2'
      );
  }, []);
  return (
    <PartnersWrapper className="container">
      <PartnerWrapper>
        <h2 className="partner-heading">We Partner With The Best</h2>
        <div className="icons-wrapper">
          <DPIConCompany2 className="grayed logo" />
          <DPIConCompany1 className="logo" />
          <DPIConCompany5 className="logo" />
          <DPIConCompany1 className="logo" />
          <DPIConCompany5 className="logo" />
        </div>
      </PartnerWrapper>
      <SignupWrapper className="signup-wrapper">
        <div className="signup-content">
          <h1 className="signup-content-header">
            Sign up today and receive your $40 earning bonus
          </h1>
          <Button text="Get Started" className="signup-content-button"/>
        </div>
      </SignupWrapper>
    </PartnersWrapper>
  );
};

export default Partners;

const PartnersWrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 8rem;
`;

const PartnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13rem;

  .partner-heading {
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 2rem;
      height: 1px;
      background: #fc5304;
      bottom: -10px;
    }
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 2rem;
    svg path {
      stroke: #a0a0a0;
    }

    svg {
      width: 10rem;
    }

    .grayed path {
      fill: #a0a0a0;
    }
  }
`;

const SignupWrapper = styled.div`
  background: black;
  padding-top: 10rem;
  padding-bottom: 10rem;
  border-radius: 1rem;
  color: white;

  .signup-content {
    max-width: 35rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-header {
      font-size: 2.5rem;
    }
  }
`;
