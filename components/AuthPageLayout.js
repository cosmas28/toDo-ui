import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const Container = styled.div`
  width: 100%;
`;

const AuthWrap = styled.div`
  display: block;
  margin 0 auto;
  padding: 0 7% 0 7%;

  @media screen and (min-width: 768px){
    padding: 0 20% 0 20%;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 35% 0 35%;
  }
`;

const LogoWrap = styled.div`
  text-align: center;
  padding: 15% 0 5% 0;
`;

const AuthCard = styled.div`
  background-color: #FFFFFF;
  margin: auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: ${props => props.isDisplayed ? 'flex' : 'none'};
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #BCBCBC;
`;

const Tab = styled.a`
  background-color: none;
  flex: 1;
  width: 50%;
  line-height: 3rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.active ? '#3359DB' : '#BCBCBC'};
  border-bottom: ${props => (props.active && '2px solid #3359DB')};
  text-decoration: none;
  cursor: pointer;
`;

const TabContent = styled.div`
  padding: 5%;
`;

const AuthPageLayout = props => {
  const { displayHeader, children, activeTab } = props;
  
  return (
    <Container>
      <AuthWrap>
        <LogoWrap>
          <TiWeatherPartlySunny size={50} color='#3359DB' />
        </LogoWrap>
        <AuthCard>
          <Header isDisplayed={displayHeader}>
            <Link href='/'>
              <Tab
                active={activeTab == 'Sign up' ? true : false}
              >
                Sign up
              </Tab>
            </Link>
            <Link href='/login'>
              <Tab
                active={activeTab == 'Log in' ? true : false}
              >
                Log In
              </Tab>
            </Link>
          </Header>
          <TabContent>
            {children}
          </TabContent>
        </AuthCard>
      </AuthWrap>
    </Container>
  );
}
  
export default AuthPageLayout;
