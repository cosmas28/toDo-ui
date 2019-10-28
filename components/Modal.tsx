import * as React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

type ContainerProps = {
  displayModal: boolean;
};

const Container = styled.div<ContainerProps>`
  display: ${(props): string => (props.displayModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  background-color: #ffffff;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.3rem;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @media screen and (min-width: 940px) {
    width: 30%;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 1rem 0.8rem;
  text-align: center;
`;

const Body = styled.div`
  padding: 2px 16px;
`;

const Footer = styled.div`
  padding: 0.9rem 1rem;
  text-align: left;
`;

const Button = styled.button`
  background: none;
  width: 14%;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Title = styled.h4`
  order: 0;
  width: 85%;
  margin: 0;
  text-align: left;
  font-weight: 200;
  font-size: 1.6rem;
`;

type ModalProps = {
  header?: string;
  body: JSX.Element;
  footer?: JSX.Element;
  showModal: boolean;
  handleCancelButton: () => void;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  header,
  body,
  footer,
  showModal,
  handleCancelButton,
}) => (
  <Container displayModal={showModal}>
    <Content>
      <Header>
        <Title>{header}</Title>
        <Button onClick={handleCancelButton}>
          <IoMdClose size={30} color="#3359DB" />
        </Button>
      </Header>
      <Body>{body}</Body>
      <Footer>{footer}</Footer>
    </Content>
  </Container>
);

export default Modal;
