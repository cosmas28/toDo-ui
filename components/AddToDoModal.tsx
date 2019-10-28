import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Modal from './Modal';
import InputBox from './InputBox';
import FormButton from './FormButton';

import ComponentStore from '../stores/componentStore';

const Form = styled.form``;

const ButtonsWrapper = styled.div`
  display: flex;
`;

type AddToDoModalProps = {
  store: ComponentStore;
};

@observer
class AddToDoModal extends React.Component<AddToDoModalProps> {
  renderModalBody = (): JSX.Element => (
    <Form>
      <InputBox inputType="text" placeholder="Title" />
      <InputBox inputType="text" placeholder="Link to Goal" />
      <InputBox inputType="text" placeholder="Tag" />
    </Form>
  );

  renderModalFooter = (onClickHandler): JSX.Element => (
    <ButtonsWrapper>
      <FormButton
        onClickHandler={onClickHandler}
        isFullWidth={false}
        label="CANCEL"
        isSubmit={false}
      />
      <FormButton isFullWidth={false} label="ADD" isSubmit={true} />
    </ButtonsWrapper>
  );

  render(): JSX.Element {
    return (
      <Modal
        header="Add To-Do"
        showModal={this.props.store.showAddToDoModal}
        handleCancelButton={this.props.store.setAddToDoModal}
        body={this.renderModalBody()}
        footer={this.renderModalFooter(this.props.store.setAddToDoModal)}
      />
    );
  }
}

export default AddToDoModal;
