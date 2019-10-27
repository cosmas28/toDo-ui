import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  isFullWidth?: boolean;
  isSubmit: boolean;
};

export const Button = styled.button<ButtonProps>`
  background: ${(props): string => (props.isSubmit ? '#3359db' : '#fff')};
  min-width: ${(props): string => (props.isFullWidth ? '100%' : '8.3rem')};
  height: 40px;
  margin-bottom: 0.8rem;
  margin-right: 0.8rem;
  padding: 0 20px 0 20px;
  border-color: #3359db;
  border-radius: 2px;
  color: ${(props): string => (props.isSubmit ? '#fff' : '#3359db')};
  font-size: 15px;
  font-weight: 700px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

type FormButtonProps = {
  isSubmit: boolean;
  label: string;
  isFullWidth: boolean;
  onClickHandler?: (e: React.MouseEvent) => void;
};

const FormButton: React.FunctionComponent<FormButtonProps> = ({
  isSubmit,
  label,
  isFullWidth,
  onClickHandler,
}) => (
  <Button onClick={onClickHandler} isSubmit={isSubmit} isFullWidth={isFullWidth}>
    {label}
  </Button>
);

export default FormButton;
