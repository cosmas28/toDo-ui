import React from 'react';
import { mount } from 'enzyme';

import AddToDoModal from '../components/AddToDoModal';
import ComponentStore from '../stores/componentStore';

describe('AddToDoModal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      store: ComponentStore,
    };
    wrapper = mount(<AddToDoModal {...props} />);
  });

  it('should display the modal title', () => {
    expect(wrapper.find('h4').text()).toContain('Add To-Do');
  });

  it('should display 3 input fields', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should display the ADD and CANCEL buttons', () => {
    expect(
      wrapper
        .find('button')
        .at(1)
        .text(),
    ).toContain('CANCEL');
    expect(
      wrapper
        .find('button')
        .at(2)
        .text(),
    ).toContain('ADD');
  });
});
