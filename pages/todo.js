import React from 'react';
import styled from 'styled-components';

import MainLayout from '../components/MainLayout';
import Header, { renderAddIcon, renderFilterIcon } from '../components/Header';
import MenuButton from '../components/MenuButton';
import Modal from '../components/Modal';
import ToDoCard from '../components/ToDoCard';

const Container = styled.div`
  width: 100%;
  margin: 0 5% 0 5%;

  @media screen and (min-width: 1290px) {
    padding: 0 10% 0 10%;
  }

  @media screen and (min-width: 768px) {
    margin: 0 1% 0 3%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 1% 0 5%;
  }
`;

const ToDoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
          hideBackButton={true}
        />
        <ToDoContainer>
          <ToDoCard
            title="Attend Stand-ups"
            goal="Hotdesk initiative"
            tag="ProactiveCommunication"
          />
          <ToDoCard
            title="Raise a WIP PR"
            goal="Hotdesk initiative"
            tag="StakeholderManagement"
          />
          <ToDoCard
            title="Sync with TTL"
            goal="Hotdesk initiative"
            tag="PairProgramming"
          />
          <ToDoCard
            title="Continue RegExp learning"
            goal="Master JavaScript"
            tag="frontEndMastering"
          />
          <ToDoCard
            title="SEO optimization"
            goal="Master web/browser"
            tag="frontEndMastering"
          />
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
