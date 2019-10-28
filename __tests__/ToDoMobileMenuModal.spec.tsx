import React from 'react';
import { mount } from 'enzyme';

import ToDoMobileMenuModal from '../components/ToDoMobileMenuModal';

describe('ToDoMobileMenuModal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      showModal: false,
      handleCancelButton: jest.fn(),
      content: <div className="modal-content">buttons</div>,
    };
    wrapper = mount(<ToDoMobileMenuModal {...props} />);
  });

  it('should display the content', () => {
    expect(wrapper.find('.modal-content').text()).toContain('buttons');
  });
});
