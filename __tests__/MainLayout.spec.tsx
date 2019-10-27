import * as React from 'react';
import { mount } from 'enzyme';

import { MainLayout } from '../components/MainLayout';
import ComponentStore from '../stores/componentStore';

describe('MainLayout', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: <div>Children</div>,
      store: ComponentStore,
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
