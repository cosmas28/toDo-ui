import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainLayout = props => (
  <Container>
    <NavBar />
    {props.children}
  </Container>
)

export default MainLayout;
