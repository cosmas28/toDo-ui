import * as React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  isDesktop: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space between;
  width: ${(props): string => (props.isDesktop ? '48%' : '100%')};
  text-align: ${(props): string => (props.isDesktop ? 'center' : 'left')};

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    padding: 1% 0 1% 8%;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: ${(props): false | string => props.isDesktop && 'none'};
    border-bottom: 1px solid #dcdcdc;
  }
`;

type LabelProps = {
  isDesktop?: boolean;
};

const Label = styled.h3<LabelProps>`
  font-size: ${(props): string => (props.isDesktop ? '1.35rem' : '1.6rem')};
  text-align: center;
  color: #3359db;
  font-weight: 500;
`;

const Icon = styled.i`
  text-align: center;
  padding: 26px 10px 0 0;
`;

type MenuButtonProps = {
  isDesktop: boolean;
  iconContent: JSX.Element;
  buttonLabel: string;
};

const MenuButton: React.FunctionComponent<MenuButtonProps> = props => {
  const { isDesktop, iconContent, buttonLabel } = props;

  return (
    <Container isDesktop={isDesktop}>
      {iconContent && <Icon>{iconContent}</Icon>}
      <Label>{buttonLabel}</Label>
    </Container>
  );
};

export default MenuButton;
