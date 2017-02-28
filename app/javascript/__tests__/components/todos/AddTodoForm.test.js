import React from 'react';
import { mount } from 'enzyme';
import AddTodoForm from '../../../components/todos/AddTodoForm.js'
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

let instance, form, input, mockAction;

describe('AddTodoForm', () => {
  describe('form onsubmit', () => {
    describe('when there is an input value', () => {
      beforeEach(() => {
        mockAction = jest.fn();
        instance = mount(
          <AddTodoForm addTodo={mockAction} store={store} />
        );
        form = instance.find('form');
        input = instance.find('input');
      });
      it('calls the addTodo action', () => {
        input.node.value = 'My todo'
        form.find('[type="submit"]').get(0).click()
        expect(mockAction).toBeCalledWith('My todo');
      });
    });

    describe('when there is not an input value', () => {
      beforeEach(() => {
        mockAction = jest.fn();
        instance = mount(
          <AddTodoForm addTodo={mockAction} store={store} />
        );
        form = instance.find('form');
        input = instance.find('input');
      });
      it('it does not call the addTodo action', () => {
        input.node.value = ''
        form.find('[type="submit"]').get(0).click()
        expect(mockAction).not.toBeCalled();
      });
    });
  });
});
