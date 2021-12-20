import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DPIConStar } from '../assets/icons';

const Testimony = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { delay: 0.4, ease: 'power0.out' },
      scrollTrigger: {
        trigger: '.testimony',
        start: 'top-=100px 50%',
        // markers: true,
        toggleActions: 'play none none none',
      },
    });

    timeline
      .from('.testimony-title', {
        opacity: 0,
        delay: 0,
        duration: 1,
      })
      .from(
        '.testimony-heading',
        {
          opacity: 0,
        },
        '<0'
      )
      .from(
        '.testimony-ratings',
        {
          opacity: 0,
          y: '-15',
        },
        '<0'
      )
      .from(
        '.testimony-tagline',
        {
          opacity: 0,
          y: '-15',
        },
        '<0'
      )
      .from(
        '.testimony-content-review',
        {
          opacity: 0,
        },
        '<0'
      )
      .from(
        '.chella-first',
        {
          opacity: 0,
          y: '-10',
        },
        '<0'
      )
      .from(
        '.btn-left',
        {
          opacity: 0,
          x: '-20',
        },
        '<0'
      )
      .from(
        '.btn-right',
        {
          opacity: 0,
          x: '-20',
        },
        '<0'
      )
      .from(
        '.chella-second',
        {
          opacity: 0,
          y: '-20',
        },
        '<0.2'
      );
  });

  return (
    <TestimonyWrapper className="testimony container">
      <div className="testimony-header-section">
        <h5 className="testimony-title">Testimony</h5>
        <h1 className="testimony-heading">
          Inspired by Investors. Built for the Future.
        </h1>
        <p className="testimony-ratings">
          Rated <span className="testimony-ratings-score">4.3/5</span> based on{' '}
          <span className="testimony-ratings-count">96</span> reviews.
        </p>
        <p className="testimony-ratings ratings-text">
          Showing our favorite reviews.
        </p>
        <p className="testimony-tagline">
          <DPIConStar className="icon" /> <span>Trustpilot</span>
        </p>
      </div>

      <div className="testimony-content">
        <div className=".testimony-content-card">
          <div className="testimony-content-review">
            <p className="testimony-content-review-text">
              Every now and then, something comes around to make you realise how
              poorly designed exerything is. Turney is one of the most
              intentionally designed products I've seen
            </p>
            <div className="testimony-content-review-author">
              <div className="testimony-content-review-author-image first ">
                <img src="https://picsum.photos/200/300" alt="random" />
              </div>
              <div className="testimony-content-review-author-title">
                <p className="testimony-content-review-author-title-name">
                  Javed N
                </p>
                <p className="testimony-content-review-author-title-class">
                  BTC Holder
                </p>
              </div>
            </div>
          </div>
          <div className="testimony-content-btns">
            <span className="testimony-content-btns-inactive btn-left">{'<'}</span>
            <span className="testimony-content-btns-active btn-right">{'>'}</span>
          </div>
        </div>

        <div className="testimony-content-user chell-first ">
          <img src="https://picsum.photos/200/300" alt="random" />
        </div>
        <div className="testimony-content-user chella-second">
          <img src="https://picsum.photos/200/300" alt="random" />
        </div>
      </div>
    </TestimonyWrapper>
  );
};

export default Testimony;

const TestimonyWrapper = styled.div`
  background: black;
  color: white;
  padding-top: 5rem;
  /* padding-bottom: 5rem; */
  text-align: left;

  display: flex;

  .testimony {
    &-header-section {
      max-width: 30rem;
      margin-bottom: 5rem;
    }

    &-header-section {
      max-width: 23rem;
    }

    &-heading {
      font-size: 3rem;
      margin-bottom: 7rem;
    }

    &-title {
      font-size: 1.5rem;
      position: relative;
      margin-bottom: 3rem;

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

    &-ratings {
      color: #7c7c7cd2;

      &-score {
        color: white;
        font-weight: bold;
      }

      &-count {
        color: white;
      }
    }

    &-tagline {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      margin-top: 1.5rem;
      .icon {
        width: 1.2rem;
      }
    }

    &-content {
      flex: 1;
      display: flex;
      gap: 4rem;
      justify-content: end;

      &-user {
        height: 7rem;
        width: 7rem;
        position: relative;
        background: #fff;
        padding-top: 2rem;
        border-radius: 0.5rem;
        top: 20rem;

        img {
          /* width: 3.5rem; */
          height: 70%;
          object-fit: cover;
          position: absolute;
          bottom: 0;
          left: 0;

          /* align-self: */
        }
      }

      &-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2rem;
        max-width: 20rem;

        &-inactive,
        &-active {
          border-radius: 50%;
          height: 3rem;
          width: 3rem;
          display: grid;
          place-content: center;
        }

        &-inactive {
          background-color: #3d3d3d;
        }
        &-active {
          background-color: #fc5304;
        }
      }

      &-review {
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 0.5rem;
        max-width: 20rem;
        line-height: 2rem;
        font-size: 1.5rem;
        padding: 4rem 2rem 2rem;
        border-radius: 0.5rem;

        &-text {
          font-size: 1.2rem;
        }

        &-author {
          padding: 1.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          &-image {
            height: 4rem;
            width: 4rem;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
            }
          }

          &-title {
            font-size: 1rem;

            &-name {
              font-weight: bold;
            }
            &-class {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`;
