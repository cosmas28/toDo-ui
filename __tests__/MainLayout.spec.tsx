import * as React from 'react';
import { mount } from 'enzyme';

import { MainLayout } from '../components/MainLayout';

describe('MainLayout', () => {
  let wrapper;
  let props;
  const store = {
    showMoreMenu: false,
    showMobileMenu: false,
    activeMenu: 'To-Do',
    setActiveMenu: menuLabel => {
      store.activeMenu = menuLabel;
    },
    setMobileMenuState: () => {
      store.showMobileMenu = !store.showMobileMenu;
    },
    setMoreMenuState: () => {
      store.showMoreMenu = !store.showMoreMenu;
    },
  };

  beforeEach(() => {
    props = {
      children: <div>Children</div>,
      store: store,
    };
    wrapper = mount(<MainLayout {...props} />);
  });

  it('should display NavBar', () => {
    expect(wrapper.find('NavBar').length).toEqual(1);
  });

  it('should display its children', () => {
    expect(
      wrapper
        .find('div')
        .last()
        .text(),
    ).toContain('Children');
  });
});
