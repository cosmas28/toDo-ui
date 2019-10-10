import * as React from 'react';
import { mount } from 'enzyme';

import App from '../pages/index';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should display Sign up tab', () => {
    expect(
      wrapper
        .find('a')
        .at(0)
        .text(),
    ).toEqual('Sign up');
  });

  it('should display three input fields', () => {
    expect(wrapper.find('InputBox').length).toEqual(3);
  });

  it('should display a submit button', () => {
    expect(wrapper.find('button').text()).toContain('Creat An Account');
  });
});
