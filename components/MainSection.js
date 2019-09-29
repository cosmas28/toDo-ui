import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Header = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #DCDCDC;
`;

const HeadingThreeText = styled.h3``;

const Main = styled.div`
  width: 100%;
  text-align: center;
`;

const ParagraphText = styled.p`
  font-size: 1rem;
`;

const MainSection = () => (
  <Container>
    <Header>
      <HeadingThreeText>Product Planning</HeadingThreeText>
    </Header>
    <Main>
      <ParagraphText>
        As seen above, pseudo-selectors and pseudo-elements are well handled in Styled Components and pretty
         much everything that can be done in traditional CSS can be done in Styled Components.
      </ParagraphText>
    </Main>
  </Container>
);

export default MainSection;
