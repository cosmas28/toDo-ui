import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from '../components/Modal';

describe('Modal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      header: 'Add To-Do',
      body: <div className="moda-body">body</div>,
      footer: <div className="moda-footer">footer</div>,
      showModal: false,
      handleCancelButton: jest.fn(),
    };
    wrapper = mount(<Modal {...props} />);
  });

  it('should display header content', () => {
    expect(wrapper.find('h4').text()).toContain('Add To-Do');
    expect(wrapper.find('IoMdClose').length).toEqual(1);
  });

  it('should display the body content', () => {
    expect(wrapper.find('.moda-body').text()).toContain('body');
  });

  it('should display footer content', () => {
    expect(wrapper.find('.moda-footer').text()).toContain('footer');
  });
});
