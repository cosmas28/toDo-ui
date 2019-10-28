import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

import AuthPageLayout from '../components/AuthPageLayout';
import InputBox from '../components/InputBox';
import { emailIcon } from '../components/Icons';
import { Form, FormItem } from './index';
import FormButton from '../components/FormButton';

const Header = styled.div`
  text-align: center;
  line-height: 1.4;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
`;

const Message = styled.p`
  padding: 1%;
  font-weight: 200;
  font-size: 1.1rem;
`;

const LoginLink = styled.a`
  font-weight: 200;
  font-size: 1.2rem;
  text-decoration: none;
  color: #3359db;
  cursor: pointer;
`;

const ForgotPassword: NextPage = () => {
  return (
    <AuthPageLayout displayHeader={false}>
      <Header>
        <Title>Forgot Password</Title>
        <Message>
          No Problem! Enter your email below and we will send you an email with instruction to reset
          your password.
        </Message>
      </Header>
      <Form>
        <InputBox icon={emailIcon()} inputType="email" placeholder="Email" errorMessage="" />
        <FormItem>
          <FormButton isFullWidth={true} label="Send Reset Link" isSubmit={true} />
        </FormItem>
        <FormItem isForgot>
          <Link href="/login">
            <LoginLink>Back to Login</LoginLink>
          </Link>
        </FormItem>
      </Form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
