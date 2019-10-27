import React from 'react';
import { mount } from 'enzyme';

import FormButton from '../components/FormButton';

describe('FormButton', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isSubmit: true,
      label: 'Add',
      isFullWidth: false,
      onClickHandler: jest.fn(),
    };
    wrapper = mount(<FormButton {...props} />);
  });

  it('should display the button', () => {
    expect(wrapper.find('button').text()).toContain('Add');
  });
});
