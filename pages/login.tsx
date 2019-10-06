import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import InputBox from '../components/InputBox';
import AuthPageLayout from '../components/AuthPageLayout';
import { Form, FormItem, Button } from './index';
import { emailIcon, passwordIcon } from '../components/Icons';

const FormSecondaryInput = styled.div`
  display: flex;
  flex-wrapper: wrap;
  margin: 1.8rem 0 1.8rem 0;
`;

const RememberMeWrap = styled.div`
  display: flex;
  flex-wrapper: wrap;
  width: 50%;
`;

const ForgotPasswordLink = styled.a`
  width: 50%;
  padding-top: 0.1rem;
  lin-height: 1.4rem;
  font-weight: 200;
  text-decoration: none;
  text-align: right;
  color: #3359DB;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding-top: 0.3rem;
  }
`;

const CheckBoxWrap = styled.div``;

const CheckBoxInput = styled.input`
  width: 1rem;
  height: 1rem;
  padding-top: 0.3rem;
  padding-left: 1.3rem;
  cursor: pointer;

  @media screen and (min-width: 768px){
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const CheckBoxLabel = styled.div`
  padding-top: 0.1rem;
  font-weight: 200;
  lin-height: 1.4rem;
  text-align: center;
  color: #808080;

  @media screen and (min-width: 768px) {
    padding-top: 0.3rem;
  }
`;

const Login: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/todo');
  }

  return (
    <AuthPageLayout
      displayHeader={true}
      activeTab='Log in'
    >
      <Form>
        <InputBox
          icon={emailIcon()}
          inputType='email'
          placeholder='Email'
        />
        <InputBox
          icon={passwordIcon()}
          inputType='password'
          placeholder='Your password'
        />
        <FormSecondaryInput>
          <RememberMeWrap>
            <CheckBoxWrap>
              <CheckBoxInput type='checkbox' />
            </CheckBoxWrap>
            <CheckBoxLabel>Remember Me</CheckBoxLabel>
          </RememberMeWrap>
          <Link href='/forgot-password'>
            <ForgotPasswordLink>Forgot Your Password?</ForgotPasswordLink>
          </Link>
        </FormSecondaryInput>
        <FormItem>
          <Button onClick={handleSubmit}>Log in</Button>
        </FormItem>
      </Form>
    </AuthPageLayout>
  );
}

export default Login;
