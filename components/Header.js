import React from 'react';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';
import { IoMdMore, IoIosAddCircle } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0.98rem 0 0.98rem 0;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space between;
  order: 0;
  width: 49%;
  text-align: left;
  
  @media screen and (max-width: 500px) {
    flex-basis: 80%;
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    flex-basis: 59%;
  }
`;

const RightSide = styled.div`
  order: 1;
  width: 29%;
  text-align: right;

  @media screen and (max-width: 500px) {
    width: 18%;
    margin-right: 1.3%;
  }

  @media screen and (max-width: 1024px) {
    width: 39%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space between;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  background: none;
  margin-right: ${props => props.backButton && '2em'};
  border: none;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 500px) {
    display: ${props => props.moreButton && 'none'};
    margin-right: ${props => props.backButton && '5em'};
  }
`;

export const renderAddIcon = (iconSize) => (
  <IoIosAddCircle size={iconSize} color='#3359DB' />
);

export const renderFilterIcon = (iconSize) => (
  <FaFilter size={iconSize} color='#3359DB' />
);

const Header = props => {
  const { title, handleMoreButton, content } = props;

  return (
    <Container>
      <LeftSide>
        <Button backButton>
          <TiArrowBack size={50} color='#3359DB' />
        </Button>
        <Title>{title}</Title>
      </LeftSide>
      <RightSide>
        <Button moreButton onClick={handleMoreButton}>
          <IoMdMore size={50} color='#3359DB' />
        </Button>
        {content}
      </RightSide>
    </Container>
  );
};

export default Header;
