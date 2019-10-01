import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: none;
  display: flex;
  justify-content: space between;
  width: 32.9%;
  border: none;
  
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;

const Icon = styled.i`
  text-align: center;
  padding: 26px 10px 0 0;
`;

const Label = styled.h5`
  font-size: 0.962rem;
  color: ${props => props.isDelete ? '#FF0000' : '#3359DB'};
  font-weight: 600;
`;

const Button = props => {
  const { label, icon, type } = props;

  return (
    <Container>
      <Icon>
        {icon}
      </Icon>
      <Label isDelete={type}>
        {label}
      </Label>
    </Container>
  );
};

export default Button;
