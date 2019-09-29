import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space between;
  width: ${props => props.isDesktop ? '48%' : '100%'};
  text-align: ${props => props.isDesktop ? 'center' : 'left'};
  
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    padding: 1% 0 1% 8%;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: ${props => props.isDesktop && 'none'};
    border-bottom: 1px solid #DCDCDC;
  }
`;

const Label = styled.h3`
  font-size: ${props => props.isDesktop ? '1.35rem' : '1.6rem'};
  text-align: center;
  color: #3359DB;
  font-weight: 500;
`;

const Icon = styled.i`
  text-align: center;
  padding: 26px 10px 0 0;
`;

const MenuButton = props => {
  const { isDesktop, iconContent, buttonLabel } = props;

  return (
    <Container
      isDesktop={isDesktop}
    >
      {
        iconContent &&
        <Icon>
          {iconContent}
        </Icon>
      }
      <Label>
        {buttonLabel}
      </Label>
    </Container>
  );
};

export default MenuButton;
