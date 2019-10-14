import * as React from 'react';
import { mount } from 'enzyme';

import MenuButton from '../components/MenuButton';
import { deleteIcon } from '../components/Icons';

describe('MenuButton', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isDesktop: true,
      iconContent: deleteIcon(),
      buttonLabel: 'Delete',
    };
    wrapper = mount(<MenuButton {...props} />);
  });

  it('should display the button wrapper', () => {
    expect(wrapper.find('MenuButton').length).toEqual(1);
  });

  it('should display the given icon', () => {
    expect(wrapper.find('FaTrashAlt').length).toEqual(1);
  });

  it('should display the given label', () => {
    expect(wrapper.find('h3').text()).toContain('Delete');
  });
});
