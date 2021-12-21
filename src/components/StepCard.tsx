import React from 'react';
import styled from 'styled-components';
import { IStepCard } from '../types';

const StepCard: React.FC<IStepCard> = ({ head, content, stepNum }) => {
  return (
    <StepCardWrapper className="step-card-info">
      <div className="step-num">
        <p className="step-num-text">{stepNum}</p>
      </div>
      <h3>{head}</h3>
      <p>{content}</p>
    </StepCardWrapper>
  );
};

export default StepCard;

const StepCardWrapper = styled.div`
  border: 1px solid #979797;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  /* align-items: center; */
  justify-content: center;
  text-align: left;
  /* max-width: 15rem; */
  width: 100%;

  .step-num {
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;

    &-text {
      background-color: #9b1d01;
      padding: 0.1rem 0.4rem;
      border-radius: 3px;
      color: #f79346;
      width: max-content;
    }
  }
`;
