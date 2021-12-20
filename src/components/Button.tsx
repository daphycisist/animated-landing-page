import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Button = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: ReactElement;
  className?: string;
}) => {
  return (
    <ButtonWrapper className={className}>
      <p>{text}</p>
      <p>{icon}</p>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  background-color: #fc5304;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 0.8rem 1.5rem;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  justify-content: center
  gap: 1rem;
  margin-top: 3rem;
  width: max-content;
`;
