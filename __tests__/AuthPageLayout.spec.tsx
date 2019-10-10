import * as React from 'react';
import { mount } from 'enzyme';

import AuthPageLayout from '../components/AuthPageLayout';

describe('AuthPageLayout', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      displayHeader: true,
      activeTab: 'Sign up',
    };

    wrapper = mount(<AuthPageLayout {...props} />);
  });

  it('should display logo', () => {
    expect(wrapper.find('TiWeatherPartlySunny').length).toEqual(1);
  });

  it('should display Log in tab', () => {
    expect(
      wrapper
        .find('a')
        .at(0)
        .text(),
    ).toContain('Sign up');
  });

  it('should display Log in tab', () => {
    expect(
      wrapper
        .find('a')
        .at(1)
        .text(),
    ).toContain('Log in');
  });
});
