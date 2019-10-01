import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import MainLayout from '../components/MainLayout';
import MainSection from '../components/MainSection';

const MainPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => (
  <MainLayout>
    <MainPage>
      <MainSection />
    </MainPage>
  </MainLayout>
)

export default App;
