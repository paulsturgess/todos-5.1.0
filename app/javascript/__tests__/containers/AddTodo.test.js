import React from 'react';
import { shallow } from 'enzyme';
import actions from '../../actions/todos'
import AddTodoFormContainer from '../../containers/todos/AddTodoFormContainer.js'
import AddTodoForm from '../../components/todos/AddTodoForm.js'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

describe('AddTodo', () => {
  let instance, container, component;

  beforeEach(() => {
    spyOn(store, 'dispatch')
    instance = shallow(
      <AddTodoFormContainer store={store} />
    );
  });

  it('sets the addTodo prop on the AddTodoForm Component', () => {
    let action = instance.find(AddTodoForm).props().addTodo('test')
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: 'ADD_TODO', id: 0, text: 'test' }
    );
  });
});
