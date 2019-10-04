import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.8rem;
`;

const InputWrap = styled.div`
  background-color: #F0F8FF;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 45px;
  border-bottom: ${props => props.isDisplayed && '0.1rem solid #FF0000'};
  box-shadow: inset 0 1px 4px rgba(0,0,0,.1), 0 0 0 transparent;
`;

const ErrorWrap = styled.div`
  display: ${props => props.isDisplayed ? 'block' : 'none'}
  width: 100%;
  color: #FF0000;
  text-align: left;
  text-size: 1.4rem;
  font-weight: 500;
`;

const Icon = styled.i`
  width: 22%;
  padding-top: 12px;
  text-align: center;
  border: none;
`;

const Input = styled.input`
  background-color: #F0F8FF;
  width: 75.3%;
  height: 40px;
  margin: auto;
  padding-left: 2%;
  border: 0;
  box-sizing: border-box;
  font-size: 1rem;
  color: #0e141e;
  overflow: visible;

  &:focus {
    border: none;
    outline: none;
  }
`;

const InputBox = props => {
  const { icon, inputType, placeholder, errorMessage } = props;
  const isDisplayed = errorMessage ? true : false;

  return (
    <Container>
      <InputWrap isDisplayed={isDisplayed}>
        <Icon>{icon}</Icon>
        <Input type={inputType} placeholder={placeholder} />
      </InputWrap>
      <ErrorWrap
        isDisplayed={isDisplayed}
      >
        {errorMessage}
      </ErrorWrap>
    </Container>
  );
};

export default InputBox;
