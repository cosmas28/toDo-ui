import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { observer } from 'mobx-react';

import ComponentStore from '../stores/componentStore';

const Nav = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0 8px 6px -6px #696969;

  @media screen and (max-width: 1290px) {
    padding: 0 2% 0 2%;
  }

  @media screen and (min-width: 1290px) {
    padding: 0 10% 0 10%;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  @media screen and (min-width: 940px) {
    order: 0;
    flex-basis: 60%;
  }
`;

type MenuLinkProps = {
  showMobileMenu: boolean;
  active: boolean;
};

const MenuLink = styled.a<MenuLinkProps>`
  display: ${(props): string => (props.showMobileMenu ? 'block' : 'none')};
  order: 2;
  padding: 10px;
  color: ${(props): string => (props.active ? '#3359DB' : '#BCBCBC')};
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #3359db;
    border-bottom: 5px solid #3359db;
  }

  @media screen and (max-width: 940px) {
    width: 100%;
    margin-top: 10px;
  }

  @media screen and (min-width: 940px) {
    display: block;
    order: 1;
    padding-top: 25px;
    border-bottom: ${(props): string | false => props.active && '5px solid #3359DB'};
    font-size: 1.32rem;
  }
`;

const MenuIcon = styled.button`
  order: 1;

  &:active {
    text-decoration: none;
  }

  @media screen and (min-width: 940px) {
    display: none;
  }
`;

type NavBarProps = {
  store: ComponentStore;
};

@observer
class NavBar extends React.Component<NavBarProps> {
  toggleMobileMenu = (): void => this.props.store.setMobileMenuState();

  handleLinkClick = (menuLabel: string) => (): void => this.props.store.setActiveMenu(menuLabel);

  render(): JSX.Element {
    const { showMobileMenu, activeMenu } = this.props.store;
    return (
      <Nav>
        <Link href="/">
          <Logo>
            <TiWeatherPartlySunny size={50} color="#3359DB" />
          </Logo>
        </Link>
        <Link href="/todo">
          <MenuLink
            onClick={this.handleLinkClick('To-Do')}
            active={activeMenu === 'To-Do' ? true : false}
            showMobileMenu={showMobileMenu}
          >
            To-Do
          </MenuLink>
        </Link>
        <MenuLink
          onClick={this.handleLinkClick('Goals')}
          active={activeMenu === 'Goals' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Goals
        </MenuLink>
        <MenuLink
          onClick={this.handleLinkClick('Notes')}
          active={activeMenu === 'Notes' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Notes
        </MenuLink>
        <MenuLink
          onClick={this.handleLinkClick('Routines')}
          active={activeMenu === 'Routines' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Routines
        </MenuLink>
        <MenuIcon onClick={this.toggleMobileMenu}>
          {!showMobileMenu ? <FaBars size={50} color="#3359DB" /> : <FaTimes size={50} color="#3359DB" />}
        </MenuIcon>
      </Nav>
    );
  }
}

export default NavBar;
