import React from 'react';
import styled from 'styled-components';

import MainLayout from '../components/MainLayout';
import Header, { renderAddIcon, renderFilterIcon } from '../components/Header';
import MenuButton from '../components/MenuButton';
import Modal from '../components/Modal';

const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 1290px) {
    padding: 0 10% 0 10%;
  }
`;

const ToDoContainer = styled.div`
  background-color: #FFFFFF;
  width: 100%;
`;

const ParagraphText = styled.p`
  font-size: 1rem;
`;

export const renderTodoMenu = (display) => (
  <>
    <MenuButton
      isDesktop={display}
      iconContent={renderAddIcon(30)}
      buttonLabel='Add'
    />
    <MenuButton
      isDesktop={display}
      iconContent={renderFilterIcon(30)}
      buttonLabel='Filter'
    />
  </>
);

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreMenu: false,
    }
  }

  toggleMoreButton = () => this.setState({
    showMoreMenu: !this.state.showMoreMenu,
  })
  
  render() {
    const { showMoreMenu } = this.state;

    return (
     <MainLayout>
      <Container>
        <Header
          title='My To-Do'
          handleMoreButton={this.toggleMoreButton}
          content={renderTodoMenu(true)}
        />
        <ToDoContainer>
          <ParagraphText>
            As seen above, pseudo-selectors and pseudo-elements are well handled in Styled Components and pretty
            much everything that can be done in traditional CSS can be done in Styled Components.
          </ParagraphText>
        </ToDoContainer>
      </Container>
      <Modal
        showModal={showMoreMenu}
        handleCancelButton={this.toggleMoreButton}
        body={renderTodoMenu(false)}
      />
     </MainLayout>
    );
  }
}

export default ToDo;
