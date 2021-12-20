import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap, Power4 } from 'gsap';
import React from 'react';
import styled from 'styled-components';
import { cardData } from '../utils';
import PriceCards from './PriceCards';

const Header = () => {
  React.useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: Power4.easeOut },
    });

    const stepCards = gsap.utils.toArray('.step-content');

    timeline
      .from('.header-wrapper', { opacity: '#d1d1d1' })
      .set('.app', { autoAlpha: 1 })
      .from('.logo-icon', { rotate: -45, opacity: 0, ease: Power4.easeOut })
      .from(
        '.heading',
        {
          y: '-10',
          opacity: 0,
          ease: Power4.easeOut,
        },
        // { opacity: 1, ease: Power4.easeOut, y: 0 },
        '<.01'
      )
      .from(
        '.logo-text',
        { x: '-0.5rem', opacity: 0, ease: Power4.easeOut },
        '<0.2'
      )
      .from(
        '.nav-links',
        {
          opacity: 0,
          ease: 'power3',
        },
        '-=.75'
      )
      .from(
        '.description-text',
        {
          y: '-40',
          opacity: 0,
        },
        '<.01'
      )
      .to(
        '.hidden-top',
        {
          height: 0,
          transformOrigin: 'top',
          duration: 1.5,
        },
        '<.5'
      )
      .from(
        '.top-action-btn',
        {
          y: '-40',
          opacity: 0,
        },
        '<.2'
      )
      .from(
        '.auth-link',
        {
          opacity: 0,
          ease: 'power1',
        },
        '<.01'
      )
      .from(
        '.card-wrapper',
        {
          opacity: 0,
          ease: Power4.easeOut,
        },
        '<.5'
      )
      .fromTo(
        '.card-wrapper >:nth-last-child(2)',
        { opacity: 0, y: '-20' },
        { opacity: 1, ease: Power4.easeOut, y: 0 },
        '<.2'
      )
      .fromTo(
        '.card-nav-left',
        { opacity: 0, x: '-20' },
        { opacity: 1, ease: Power4.easeOut, x: 0 },
        '<.6'
      )
      .fromTo(
        '.card-nav-right',
        { opacity: 0, x: '20' },
        { opacity: 1, ease: Power4.easeOut, x: 0 },
        '<0'
      )
      .fromTo(
        '.feature',
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut, x: 0 },
        '<.2'
      )
      .fromTo(
        '.header-text',
        { opacity: 0, x: '-1rem' },
        { opacity: 1, ease: Power4.easeOut, x: 0 },
        '<.3'
      )
      .from(
        '.feature-step-wrapper',
        {
          opacity: 0,
        },
        '<.1'
      )
      .from(
        '.step-head-wrapper',
        {
          opacity: 0,
          y: '-20',
          ease: Power4.easeOut,
        },
        '<.4'
      )
      .from(
        '.step-head-action-btn',
        {
          opacity: 0,
          y: '-20',
          ease: Power4.easeOut,
        },
        '<0'
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
    <HeaderWapper className="header">
      <TopSection className="header-wrapper container">
        <NavBar>
          <NavlinkWrapper>
            <NavLogo>
              <p className="logo-icon">II</p>
              <p className="logo-text">Turney</p>
            </NavLogo>
            <Navlinks className="nav-links">
              <Navlink>Earn</Navlink>
              <Navlink>Trade</Navlink>
              <Navlink>
                Learn <FontAwesomeIcon icon="chevron-down" />
              </Navlink>
              <Navlink>Blog</Navlink>
            </Navlinks>
          </NavlinkWrapper>
          <AuthLinksWrapper className="auth-link">
            <button>Login</button>
            <button>Join Now</button>
          </AuthLinksWrapper>
        </NavBar>
        <TopTextWrapper>
          <h3 className="heading top-text">
            Don't just hold, <span>Earn</span>
          </h3>
          <p className="description-text top-text">
            Buy or deposit crypto with one click and start earning, not just
            saving.
          </p>
          <button className="top-action-btn top-text">
            Get Started <FontAwesomeIcon icon="chevron-right" />
          </button>
        </TopTextWrapper>
        <CardSectionWrapper className="card-wrapper">
          <CardNav className="card-nav-left">{'<'}</CardNav>
          {cardData.map((item, index) => (
            <PriceCards key={Math.random()} {...item} className="price-card" />
          ))}
          <CardNav className="card-nav-right">{'>'}</CardNav>
        </CardSectionWrapper>
      </TopSection>
      <TopSectionHidden className="hidden-top" />
      <TopSectionContent className="container">
        <div className="wrapper">
          <p className="feature">Our Feature</p>
          <h1 className="header-text">
            Get ready for seamless online investment, with crypto digital
            currencies
          </h1>
        </div>
      </TopSectionContent>
    </HeaderWapper>
  );
};

export default Header;

const HeaderWapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.section`
  height: 65vh;
  background: black;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopSectionHidden = styled.div`
  height: 35vh;
  background: black;
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const NavlinkWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 5rem;
`;

const NavLogo = styled.span`
  width: 100%;
  display: flex;
  font-size: 1.5em;
  gap: 0.5rem;

  .logo-icon {
  }
  .logo-text {
    text-transform: capitalize;
    font-weight: bold;
  }
`;

const Navlinks = styled.ul`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;

const Navlink = styled.li`
  list-style: none;
  font-weight: 600;
  cursor: pointer;
`;

const AuthLinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  font-weight: 600;

  button {
    cursor: pointer;
  }

  > :nth-child(1) {
    background: none;
    color: white;
    border: none;
  }

  > :nth-child(2) {
    color: white;
    background: #1d1d1d;
    border-radius: 5px;
    outline: none;
    border: 1px solid #3f3f3f;
    padding: 0.9rem 1.5rem;
    white-space: nowrap;
  }
`;

const TopTextWrapper = styled.div`
  flex: 1;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 4em;
    font-weight: 500;
    margin-bottom: 0.2rem;
    span {
      font-weight: 800;
    }
  }

  .description-text {
    font-size: 1.2em;
  }

  .top-action-btn {
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

    &:hover {
      /* transform: translateY(-50px); */
    }
  }

  /* display: flex;
  align-items: center */
`;

const CardSectionWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  .card-nav {
    &-right {
      top: 50%;
      transform: translateY(-50%);
      right: -1.25rem;
    }
    &-left {
      left: -1.25rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const CardNav = styled.button`
  position: absolute;
  display: grid;
  place-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: white;
  border: none;
  z-index: 1;
`;

const TopSectionContent = styled.div`
  text-align: left;
  color: #333333;
  height: 35vh;
  display: flex;
  align-items: center;

  .wrapper {
    display: flex;
  }

  .feature {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 15rem;
  }

  .header-text {
    text-transform: capitalize;
    max-width: 30rem;
    font-size: 2.5rem;
    font-weight: bold;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -2rem;
      width: 5rem;
      height: 1px;
      background: #ff7130;
    }
  }
`;
