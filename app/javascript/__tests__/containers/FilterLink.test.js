import React from 'react';
import { shallow } from 'enzyme';
import actions from '../../actions/todos'
import FilterLinkContainer from '../../containers/todos/FilterLinkContainer.js'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({visibilityFilter: 'FOO'});

const setupInstance = (filter) => {
  return(
    shallow(
      <FilterLinkContainer filter={filter} store={store}>
        'Hi'
      </FilterLinkContainer>
    )
  );
}

describe('FilterLinkContainer', () => {
  let instance;

  describe('active prop', () => {
    describe('when the filter prop equals the state visibilityFilter', () => {
      it('sets the active prop on the Link Component to true', () => {
        instance = setupInstance('FOO')
        const active = instance.props().active
        expect(active).toEqual(true)
      });
    });

    describe('when the filter prop does not equal the state visibilityFilter', () => {
      it('sets the active prop on the Link Component to true', () => {
        instance = setupInstance('BAR')
        const active = instance.props().active
        expect(active).toEqual(false)
      });
    });
  });

  describe('onClick prop', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch')
    });
    it('sets the onClick prop to dispatch the visibility filter action', () => {
      instance = setupInstance('BAR')
      const action = instance.props().onClick()
      expect(store.dispatch).toHaveBeenCalledWith(
        { type: 'SET_VISIBILITY_FILTER', filter: 'BAR' }
      );
    })
  });
});
