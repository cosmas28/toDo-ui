import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.8rem;
`;

type InputWrapProps = {
  isDisplayed: boolean;
};

const InputWrap = styled.div<InputWrapProps>`
  background-color: #f0f8ff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 45px;
  border-bottom: ${(props): false | string => props.isDisplayed && '0.1rem solid #FF0000'};
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 0 transparent;
`;

type ErrorWrapProps = {
  isDisplayed: boolean;
};

const ErrorWrap = styled.div<ErrorWrapProps>`
  display: ${(props): string => (props.isDisplayed ? 'block' : 'none')};
  width: 100%;
  color: #ff0000;
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
  background-color: #f0f8ff;
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

type InputBoxProps = {
  icon: JSX.Element;
  inputType: string;
  placeholder: string;
  errorMessage?: string;
};

const InputBox: React.FunctionComponent<InputBoxProps> = props => {
  const { icon, inputType, placeholder, errorMessage } = props;
  const isDisplayed = errorMessage ? true : false;

  return (
    <Container>
      <InputWrap isDisplayed={isDisplayed}>
        <Icon>{icon}</Icon>
        <Input type={inputType} placeholder={placeholder} />
      </InputWrap>
      <ErrorWrap isDisplayed={isDisplayed}>{errorMessage}</ErrorWrap>
    </Container>
  );
};

export default InputBox;
