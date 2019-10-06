import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainLayout: React.FunctionComponent = props => (
  <Container>
    <NavBar />
    {props.children}
  </Container>
)

export default MainLayout;
