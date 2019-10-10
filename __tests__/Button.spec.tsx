import * as React from 'react';
import { mount } from 'enzyme';
import { FaTrashAlt } from 'react-icons/fa';

import Button from '../components/Button';

describe('Button', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      label: 'Login',
      type: 'isDelete',
      icon: <FaTrashAlt />,
    };
    wrapper = mount(<Button {...props} />);
  });

  it('should display the given icon', () => {
    expect(wrapper.find('FaTrashAlt').length).toEqual(1);
  });

  it('should display the given label', () => {
    expect(wrapper.find('h5').text()).toContain('Login');
  });
});
