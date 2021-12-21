import React from 'react';
import styled from 'styled-components';
import { IPriceCards } from '../types';

const PriceCards: React.FC<IPriceCards> = ({
  name,
  amount,
  abbr,
  icon,
  change,
  ...rest
}) => {
  return (
    <CardWrapper {...rest}>
      <div className="scale-body">
        <HeadSection>
          <div>
            <p>{name}</p>
            <p>{abbr}</p>
          </div>
          {icon}
        </HeadSection>
        <ContentSection>
          <p>{amount}</p>
          <p>{change}</p>
        </ContentSection>
      </div>
    </CardWrapper>
  );
};

export default PriceCards;

const CardWrapper = styled.div`
  background: #1d1d1d;
  border: 1px solid #707070;
  padding: 2rem;
  overflow: hidden;
  opacity: 0.7;

  &:not(:first-of-type) {
    border-left: none;
    border-radius: 5px 0 0 5px;
  }

  &:first-of-type {
    border-radius: 5px 0 0 0;
  }
  &:last-of-type {
    border-radius: 0 5px 0 0;
  }

  .scale-body {
    &:hover {
      transform: scale(1.1);
      transition: all .5s ease-in-out;
    }
  }
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  & > :first-child {
    display: flex;
    gap: 1rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
