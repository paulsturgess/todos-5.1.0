import React from 'react';
import { shallow } from 'enzyme';
import TodoFilters from '../../../components/todos/TodoFilters';
import FilterLink from '../../../containers/todos/FilterLinkContainer';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

describe('TodoFilters', () => {
  let instance = shallow(
    <TodoFilters store={store} />
  );
  const filterLinks = instance.find(FilterLink);

  it('returns three FilterLink components', () => {
    expect(filterLinks.length).toEqual(3);
  });

  it('returns a FilterLink with the filter SHOW_ALL', () => {
    expect(filterLinks.get(0).props.filter).toEqual('SHOW_ALL');
  });

  it('returns a FilterLink with the filter SHOW_ACTIVE', () => {
    expect(filterLinks.get(1).props.filter).toEqual('SHOW_ACTIVE');
  });

  it('returns a FilterLink with the filter SHOW_COMPLETED', () => {
    expect(filterLinks.get(2).props.filter).toEqual('SHOW_COMPLETED');
  });
});
