import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import AuthPageLayout from '../components/AuthPageLayout';
import InputBox from '../components/InputBox';
import { userIcon, emailIcon, passwordIcon } from '../components/Icons';

export const Form = styled.form``;

type FormItemProps = {
  isForgot?: boolean;
};

export const FormItem = styled.div<FormItemProps>`
  margin-bottom: 0.8rem;
  text-align: ${(props): false | string | undefined => props.isForgot && 'center'};
`;

type ButtonProps = {
  isForgot?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background: #3359db;
  width: ${(props): false | string | undefined => props.isForgot && '100%'};
  height: 40px;
  padding: 0 20px 0 20px;
  border-color: #3359db;
  border-radius: 2px;
  color: #fff;
  font-size: 15px;
  font-weight: 700px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const App: NextPage = () => {
  return (
    <AuthPageLayout displayHeader={true} activeTab="Sign up">
      <Form>
        <InputBox icon={userIcon()} inputType="text" placeholder="Username" errorMessage="" />
        <InputBox icon={emailIcon()} inputType="email" placeholder="Email" errorMessage="" />
        <InputBox icon={passwordIcon()} inputType="password" placeholder="Your password" errorMessage="" />
        <FormItem>
          <Button>Creat An Account</Button>
        </FormItem>
      </Form>
    </AuthPageLayout>
  );
};

export default App;
