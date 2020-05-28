import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { observer } from 'mobx-react';

const Container = styled.div`
  position: relative;
  order: 2;
  padding: 10px;
  font-size: 1rem;

  @media screen and (min-width: 940px) {
    display: block;
    order: 1;
    padding-top: 25px;
    font-size: 1.32rem;
  }
`;

const Button = styled.a`
  padding: 10px;
  color: #bcbcbc;
  text-decoration: none;
  outline: 0;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #3359db;
  }

  @media screen and (min-width: 940px) {
    display: block;
    order: 1;
    padding-top: 0;
    font-size: 1.32rem;
  }
`;

const ButtonLabel = styled.span`
  margin-left: 0.23rem;
`;

interface DropdownContentProps {
  isOpen: boolean;
}

const DropdownContent = styled.div<DropdownContentProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: ${(props): string => (props.isOpen ? 'block' : 'none')};
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0.5rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #292b2c;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.1);
`;

const Item = styled.a`
  display: flex;
  text-decoration: none;
  padding: 10px;
  color: #bcbcbc;
  outline: 0;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #3359db;
  }

  @media screen and (min-width: 940px) {
    font-size: 1.12rem;
  }
`;

const ItemIcon = styled.span`
  vertical-align: middle;
`;

const ItemText = styled.span`
  margin-left: 0.23rem;
`;

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

@observer
export class Dropdown extends React.Component<Props> {
  private node?: any;

  handleOutsideClick = (e): void => {
    if (!this.node) return;
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  handleClick = (): void => {
    if (!this.props.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.props.onClick();
  };

  render(): JSX.Element {
    return (
      <Container
        ref={(node): void => {
          this.node = node;
        }}
      >
        <Button onClick={this.handleClick}>
          <FaUser size={15} />
          <ButtonLabel>Cosmas</ButtonLabel>
        </Button>
        <DropdownContent isOpen={this.props.isOpen}>
          <Item>
            <ItemIcon>
              <FaCog size={15} />
            </ItemIcon>
            <ItemText>Account settings</ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <FaSignOutAlt size={18} />
            </ItemIcon>
            <ItemText>Sign out</ItemText>
          </Item>
        </DropdownContent>
      </Container>
    );
  }
}
