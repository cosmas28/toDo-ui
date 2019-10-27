import * as React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

import ComponentStore from '../stores/componentStore';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type MainLayoutProps = {
  store: ComponentStore;
};

export const MainLayout: React.FunctionComponent<MainLayoutProps> = props => (
  <Container>
    <NavBar store={props.store} />
    {props.children}
  </Container>
);

export default MainLayout;
