import * as React from 'react';
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

type LabelProps = {
  isDelete?: boolean;
};

const Label = styled.h5<LabelProps>`
  font-size: 0.962rem;
  color: ${(props): string => (props.isDelete ? '#FF0000' : '#3359DB')};
  font-weight: 600;
`;

type ButtonProps = {
  label: string;
  icon: JSX.Element;
  type?: string;
};

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { label, icon, type } = props;

  return (
    <Container>
      <Icon>{icon}</Icon>
      <Label isDelete={type == 'isDelete' ? true : false}>{label}</Label>
    </Container>
  );
};

export default Button;
