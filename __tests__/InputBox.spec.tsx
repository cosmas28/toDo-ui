import * as React from 'react';
import { mount } from 'enzyme';

import InputBox from '../components/InputBox';
import { emailIcon } from '../components/Icons';

describe('InputBox', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      icon: emailIcon(),
      inputType: 'email',
      placeholder: 'Your Email',
      errorMessage: '',
    };
    wrapper = mount(<InputBox {...props} />);
  });

  it('should contain the input element', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should display error message', () => {
    wrapper.setProps({ errorMessage: 'Email is required' });
    expect(
      wrapper
        .find('div')
        .last()
        .text(),
    ).toContain('Email is required');
  });
});
