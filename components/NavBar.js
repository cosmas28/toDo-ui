import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const Nav = styled.div`
  background-color: #FFFFFF;
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

  @media screen and (min-width: 940px){
    order: 0;
    flex-basis: 60%;
  }
`;

const MenuLink = styled.a`
  display: ${props => (props.showMobileMenu ? 'block' : 'none')};
  order: 2;
  padding: 10px;
  color: ${props => (props.active ? '#3359DB' : '#BCBCBC')};
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #3359DB;
    border-bottom: 5px solid #3359DB;
  }

  @media screen and (max-width: 940px) {
    width: 100%;
    margin-top: 10px;
  }

  @media screen and (min-width: 940px){
    display: block;
    order: 1;
    padding-top: 25px;
    border-bottom: ${props => (props.active && '5px solid #3359DB')};
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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
      activeMenu: 'To-Do',
    }
  }

  toggleMobileMenu = () => this.setState({
    showMobileMenu: !this.state.showMobileMenu,
  })

  handleMenuClick = (menuLabel) => () => this.setState({
    activeMenu: menuLabel,
  })

  render () {
    const { showMobileMenu, activeMenu } = this.state;

    return (
      <Nav>
        <Link href='/'>
          <Logo>
            <TiWeatherPartlySunny size={50} color='#3359DB' />
          </Logo>
        </Link>
        <Link href='/todo'>
          <MenuLink
            onClick={this.handleMenuClick('To-Do')}
            active={activeMenu === 'To-Do' ? true : false}
            showMobileMenu={showMobileMenu}
          >
            To-Do
          </MenuLink>
        </Link>
        <MenuLink
          onClick={this.handleMenuClick('Goals')}
          active={activeMenu === 'Goals' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Goals
        </MenuLink>
        <MenuLink
          onClick={this.handleMenuClick('Notes')}
          active={activeMenu === 'Notes' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Notes
        </MenuLink>
        <MenuLink
          onClick={this.handleMenuClick('Routines')}
          active={activeMenu === 'Routines' ? true : false}
          showMobileMenu={showMobileMenu}
        >
          Routines
        </MenuLink>
        <MenuIcon onClick={this.toggleMobileMenu}>
          {
            !showMobileMenu
              ? <FaBars size={50} color='#3359DB'/>
              : <FaTimes size={50} color='#3359DB' />
          }
        </MenuIcon>
      </Nav>
    )
  }
}

export default NavBar;
