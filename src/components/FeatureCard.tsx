import React from 'react';
import styled from 'styled-components';
import { IFeatureCard } from '../types';

const FeatureCard: React.FC<IFeatureCard> = ({ icon, header, text }) => {
  return (
    <FeatureCardWrapper className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-header">{header}</h3>
      <p className="feature-content">{text}</p>
    </FeatureCardWrapper>
  );
};

export default FeatureCard;

const FeatureCardWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  flex: 1;
  flex-grow: 1;

  .feature {
    &-icon {
      width: 2.5rem;
    }
    &-header {
      font-size: 1.6rem;
    }
    &-content {
      opacity: 0.4;
      font-weight: 600;
    }
  }
`;
