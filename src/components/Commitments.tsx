import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DPIConMarkShield } from '../assets/icons';
import Man from '../assets/images/suit-man.jpeg';
import Button from './Button';

const Commitments = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { delay: 0.4 },
      scrollTrigger: {
        trigger: '.commitments',
        start: 'top-=500px 50%',

        toggleActions: 'play none none none',
      },
    });

    timeline
      // .from('.commitments', {
      //   opacity: 0,
      //   delay: .5
      // })
      .from('.commitment-text-title', {
        opacity: 0,
        ease: 'power4.out',
      })
      .from(
        '.commitment-text-heading',
        {
          opacity: 0,
        },
        '-=.2'
      )
      .from(
        '.suit-man',
        {
          opacity: 0,
          x: '-20',
        },
        '<0'
      )
      .from(['.commitments-content', '.top-sec'], {
        opacity: 0,
        ease: 'power0.in',
        y: '-40',
      })
      .from(
        '.update',
        {
          opacity: 0,
          ease: 'power0.in',
        },
        '<0.4'
      )
      .from(
        '.commitments-btn',
        {
          opacity: 0,
          ease: 'power1.out',
          y: '-50',
        },
        '<0'
      );
  }, []);

  return (
    <CommitmentsWrapper className="commitments container">
      <ImageContainer>
        <img src={Man} alt="man" className="suit-man" />
        <GlassContent>
          <div className="top-sec">
            <div className="investment-text">Your Investment Secured</div>
            <div className="encrypted-text">
              <p>Encrypted Address</p>
              <p>0xa49rhs8939*******</p>
            </div>
          </div>
          <div className="bottom-sec">
            <div className="update">
              <DPIConMarkShield className="icon" />
              <p className="update-text">Level One Updated</p>
              <p className="rocket">🚀</p>
            </div>
            <div className="update">
              <DPIConMarkShield className="icon" />
              <p className="update-text">Level One Updated</p>
              <p className="rocket">🚀</p>
            </div>
          </div>
        </GlassContent>
      </ImageContainer>
      <CommitmentTextWrapper>
        <h3 className="commitment-text-title">Safety Priority</h3>
        <h1 className="commitment-text-heading">
          Our Commitment to Your Security
        </h1>
        <p className="commitments-content">
          Turney has extensive experience with DeFi blockchain technologies.
          This includes the security processes required to keep funds safe. We
          are serious about risk and have worked extensively to protect your
          investment.
        </p>
        <Button className="commitments-btn" text="Learn More" />
      </CommitmentTextWrapper>
    </CommitmentsWrapper>
  );
};

export default Commitments;

const CommitmentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 5rem 0; */
  padding: 5rem 20rem 15rem;
`;

const ImageContainer = styled.div`
  width: 25rem;
  height: 30rem;
  position: relative;

  img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
      transition: all 0.1s ease-in;
    }
  }
`;

const GlassContent = styled.div`
  position: absolute;
  top: 50%;
  right: -20%;
  /* margin-left: 50%; */
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  padding: 2rem 1.5rem;
  border: 1px solid white;
  border-radius: 7px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  .top-sec {
    text-align: left;
    width: 14rem;

    font-size: 14px;
    .investment-text {
      background-color: #161616;
      color: #b1b1b1;
      padding: 1rem;
      border-radius: 7px 7px 0 0;
    }
    .encrypted-text {
      background-color: #fff;
      color: #161616;
      padding: 1rem;
      border-radius: 0 0 7px 7px;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    }
  }

  .bottom-sec {
    width: 14rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: -50px;
    .update {
      display: flex;
      gap: 0.5rem;
      padding: 0.3rem 1rem;
      background: white;
      font-size: 14px;
      align-items: center;
      border-radius: 7px;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

      &-text {
        flex: 1;
      }
      .icon {
        width: 1.5rem;
        white-space: nowrap;
      }
      .rocket {
        font-size: 1.5rem;
      }
    }
  }
`;

const CommitmentTextWrapper = styled.div`
  color: #000;
  text-align: left;
  max-width: 40%;

  .commitment-text {
    &-title {
      font-size: 1.5rem;
      position: relative;

      &:after {
        content: '';
        width: 3rem;
        height: 1px;
        position: absolute;
        background: #fc5304;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 1.5rem;
      }
    }

    &-heading {
      font-size: 3rem;
      max-width: 80%;
    }
  }
`;
