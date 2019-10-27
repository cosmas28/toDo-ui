import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import AuthPageLayout from '../components/AuthPageLayout';
import InputBox from '../components/InputBox';
import { userIcon, emailIcon, passwordIcon } from '../components/Icons';
import FormButton from '../components/FormButton';

export const Form = styled.form``;

type FormItemProps = {
  isForgot?: boolean;
};

export const FormItem = styled.div<FormItemProps>`
  margin-bottom: 0.8rem;
  text-align: ${(props): false | string | undefined => props.isForgot && 'center'};
`;

const App: NextPage = () => {
  return (
    <AuthPageLayout displayHeader={true} activeTab="Sign up">
      <Form>
        <InputBox icon={userIcon()} inputType="text" placeholder="Username" errorMessage="" />
        <InputBox icon={emailIcon()} inputType="email" placeholder="Email" errorMessage="" />
        <InputBox
          icon={passwordIcon()}
          inputType="password"
          placeholder="Your password"
          errorMessage=""
        />
        <FormItem>
          <FormButton isFullWidth={false} label="Creat An Account" isSubmit={true} />
        </FormItem>
      </Form>
    </AuthPageLayout>
  );
};

export default App;
