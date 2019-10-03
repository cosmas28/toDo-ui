import React from 'react';
import styled from 'styled-components';

import AuthPageLayout from '../components/AuthPageLayout'
import InputBox from '../components/InputBox';
import { userIcon, emailIcon, passwordIcon } from '../components/Icons';

export const Form = styled.form``;

export const FormItem = styled.div`
  margin-bottom: 0.8rem;
  text-align: ${props => props.isForgot && 'center'};
`;

export const Button = styled.button`
  background: #3359DB;
  width: ${props => props.isForgot && '100%'};
  height: 40px;
  padding: 0 20px 0 20px;
  border-color: #3359DB;
  border-radius: 2px;
  color: #fff;
  font-size: 15px;
  font-weight: 700px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const App = () => {
  return (
    <AuthPageLayout
      displayHeader={true}
      activeTab='Sign up'
    >
      <Form>
        <InputBox
          icon={userIcon()}
          inputType='text'
          placeholder='Username'
          errorMessage=''
        />
        <InputBox
          icon={emailIcon()}
          inputType='email'
          placeholder='Email'
          errorMessage=''
        />
        <InputBox
          icon={passwordIcon()}
          inputType='password'
          placeholder='Your password'
          errorMessage=''
        />
        <FormItem>
          <Button>Creat An Account</Button>
        </FormItem>
      </Form>
    </AuthPageLayout>
  );
}

export default App;
