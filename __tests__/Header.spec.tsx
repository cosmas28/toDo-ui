import * as React from 'react';
import { mount } from 'enzyme';

import Header from '../components/Header';

describe('Header', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title: 'My To-Do',
      handleMoreButton: jest.fn(),
      content: <div>CONTENT</div>,
      hideBackButton: true,
    };
    wrapper = mount(<Header {...props} />);
  });

  it('should display the title', () => {
    expect(wrapper.find('h1').text()).toContain('My To-Do');
  });

  it('should display the back button', () => {
    expect(wrapper.find('TiArrowBack').length).toEqual(1);
  });

  it('should display the more button', () => {
    expect(wrapper.find('IoMdMore').length).toEqual(1);
  });

  it('should call handleMoreButton prop', () => {
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(props.handleMoreButton).toHaveBeenCalled();
  });

  it('should display the given content', () => {
    expect(
      wrapper
        .find('div')
        .last()
        .text(),
    ).toContain('CONTENT');
  });
});
