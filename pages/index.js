import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import NavBar from '../components/NavBar';
import MainSection from '../components/MainSection';


const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    font-family: "Gill Sans", sans-serif;
  }
`;

const MainPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => (
  <>
    <GlobalStyle />
    <MainPage>
      <NavBar />
      <MainSection />
    </MainPage>
  </>
)

export default App;
