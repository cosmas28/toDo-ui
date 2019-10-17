import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import MainLayout from '../components/MainLayout';
import Header, { renderAddIcon, renderFilterIcon } from '../components/Header';
import MenuButton from '../components/MenuButton';
import Modal from '../components/Modal';
import ToDoCard from '../components/ToDoCard';

import RootStore from '../stores';

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

export const renderTodoMenu = (display: boolean): JSX.Element => (
  <>
    <MenuButton isDesktop={display} iconContent={renderAddIcon(30)} buttonLabel="Add" />
    <MenuButton isDesktop={display} iconContent={renderFilterIcon(30)} buttonLabel="Filter" />
  </>
);

type ToDoProps = {
  store: RootStore;
};

@inject('store')
@observer
export class ToDo extends React.Component<ToDoProps> {
  componentDidMount(): void {
    this.props.store.toDoStore.getAllToDos();
  }

  toggleMoreButton = (): void => this.props.store.componentStore.setMoreMenuState();

  render(): JSX.Element {
    return (
      <MainLayout store={this.props.store.componentStore}>
        <Container>
          <Header
            title="My To-Do"
            handleMoreButton={this.toggleMoreButton}
            content={renderTodoMenu(true)}
            hideBackButton={true}
          />
          <ToDoContainer>
            {this.props.store.toDoStore.toDoList.map(toDo => (
              <ToDoCard key={toDo.id} title={toDo.title} goal={toDo.linkedGoal} tag={toDo.tag} />
            ))}
          </ToDoContainer>
        </Container>
        <Modal
          showModal={this.props.store.componentStore.showMoreMenu}
          handleCancelButton={this.toggleMoreButton}
          body={renderTodoMenu(false)}
        />
      </MainLayout>
    );
  }
}

export default ToDo;
