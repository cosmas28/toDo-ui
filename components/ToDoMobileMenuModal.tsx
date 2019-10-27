import React from 'react';

import Modal from './Modal';

type ToDoMobileMenuModalProps = {
  showModal: boolean;
  handleCancelButton: () => void;
  content: JSX.Element;
};

const ToDoMobileMenuModal: React.FunctionComponent<ToDoMobileMenuModalProps> = props => {
  const { showModal, handleCancelButton, content } = props;
  return <Modal body={content} handleCancelButton={handleCancelButton} showModal={showModal} />;
};

export default ToDoMobileMenuModal;
