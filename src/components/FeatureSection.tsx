import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { featureData, stepCardData } from '../utils';
import FeatureCard from './FeatureCard';
import StepCard from './StepCard';

const FeatureSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { delay: 0.2 },
      scrollTrigger: {
        trigger: '.feature-card',
        start: 'top-=500px 50%',
        markers: true,
        toggleActions: 'play reset none restart',
      },
    });

    const items = gsap.utils.toArray('.feature-card');

    items.forEach((item: any) => {
      timeline
        .from(
          item.querySelector('.feature-icon'),
          {
            opacity: 0,
            y: -20,
            delay: 0.1,
            ease: 'power4.out',
            rotate: '-90',
          },
          '<.2'
        )
        .from(
          item.querySelector('.feature-header'),
          {
            opacity: 0,
            y: -20,
            delay: 0.1,
            ease: 'power4.out',
          },
          '<.2'
        )
        .from(
          item.querySelector('.feature-content'),
          {
            opacity: 0,
            y: -20,
            delay: 0.2,
            ease: 'power4.out',
          },
          '<0.3'
        );
    });

    const stepTimeline = gsap.timeline({
      defaults: { delay: 0.3 },
      scrollTrigger: {
        trigger: '.feature-step-wrapper',
        start: 'top-=300px 50%',
        markers: true,
        // scrub: true,
        toggleActions: 'play none none none',
      },
    });

    stepTimeline
      .from('.feature-step-wrapper', {
        opacity: 0,
      })
      .from(
        '.step-head-wrapper',
        {
          opacity: 0,
          y: '-30',
          ease: 'power4.out',
        },
        '<.4'
      )
      .from(
        '.step-head-action-btn',
        {
          opacity: 0,
          y: '-20',
          ease: 'power4.out',
        },
        '<0.2'
      )
      .from(
        '.step-content .step-card-info',
        {
          y: '-10',
          opacity: 0,
          stagger: 0.5,
        },
        '<.5'
      );
  }, []);
  return (
    <SectionWrapper className="feature-wrapper container">
      <FeatureCardsWrapper>
        {featureData.map((element) => (
          <FeatureCard {...element} />
        ))}
      </FeatureCardsWrapper>
      <FeatureStepWrapper className="feature-step-wrapper">
        <div className="step-head">
          <div className="step-head-wrapper">
            <h2 className="step-head-wrapper-head">
              Start <span>Earning</span> <br /> in 5 Simple Steps
            </h2>
            <p className="step-head-wrapper-head-sub-header">Not Just Saving</p>
          </div>
          <button className="step-head-action-btn">Get Started</button>
        </div>

        <StepCardWrapper className="step-content-wrapper">
          <div className="step-content">
            {stepCardData[0].map((element, stepNum) => (
              <StepCard
                key={Math.random()}
                {...{ ...element, stepNum: stepNum + 1 }}
              />
            ))}
          </div>
          <div className="step-content">
            {stepCardData[1].map((element, stepNum) => (
              <StepCard
                className="step-card-info"
                key={Math.random()}
                {...{ ...element, stepNum: stepNum + 4 }}
              />
            ))}
          </div>
        </StepCardWrapper>
      </FeatureStepWrapper>
    </SectionWrapper>
  );
};

export default FeatureSection;

const SectionWrapper = styled.div``;
const FeatureCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FeatureStepWrapper = styled.div`
  margin: 10rem 0;
  color: white;
  background: black;
  padding: 6rem 4rem;
  text-align: left;
  display: flex;
  gap: 5rem;
  border-radius: 20px;
  justify-content: space-between;
  box-sizing: border-box;

  .step-head {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* flex: 1; */

    &-action-btn {
      background-color: #fc5304;
      color: white;
      border: none;
      border-radius: 7px;
      padding: 0.8rem 1.5rem;
      font-size: 1.2em;
      font-weight: bold;
      display: flex;
      gap: 1rem;
      margin-top: 3rem;
      width: max-content;
    }

    &-wrapper {
      font-weight: 600;
      &-head {
        margin-bottom: 1rem;
        font-size: 3.5rem;
        padding-top: 5rem;
        position: relative;

        &:before {
          position: absolute;
          content: '';
          top: 30px;
          width: 4rem;
          background: linear-gradient(
            to right,
            #fc5304,
            #fc5304 50%,
            #797979 50%
          );
          height: 1px;
          opacity: 0.6;
        }

        span {
          position: relative;

          &:after {
            position: absolute;
            content: '*';
          }
        }
        &-sub-header {
          position: relative;
          margin-left: 0.5rem;

          &:before {
            position: absolute;
            content: '*';
            margin-left: -0.5rem;
          }
        }
      }
    }
  }
`;

const StepCardWrapper = styled.div`
  display: flex;
  column-gap: 3rem;
  align-items: center;
  flex: 1;

  .step-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 1rem;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
`;
