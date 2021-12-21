import React from 'react';
import styled from 'styled-components';
import {
  DPIConCompany1,
  DPIConCompany2,
  DPIConCompany5,
} from '../assets/icons';
import Button from './Button';

const Partners = () => {
  return (
    <PartnersWrapper className="container">
      <PartnerWrapper>
        <h2 className="heading">We Partner With The Best</h2>
        <div className="icons-wrapper">
          <DPIConCompany2 className="grayed" />
          <DPIConCompany1 />
          <DPIConCompany5 />
          <DPIConCompany1 />
          <DPIConCompany5 />
        </div>
      </PartnerWrapper>
      <SignupWrapper>
        <div className="signup-content">
          <h1 className="signup-content-header">
            Sign up today and receive your $40 earning bonus
          </h1>
          <Button text="Get Started" />
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

  .heading {
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