import React from 'react';
import * as actions from '../../actions/todos';

describe('Actions', () => {

  describe('addTodo', () => {
    it('returns object with the todo attributes', () => {
      expect(actions.addTodo('My todo')).toEqual(
        {
          type: 'ADD_TODO',
          id: 0,
          text: 'My todo'
        }
      );
    });
    it('increments the id attribute', () => {
      expect(actions.addTodo('My second todo')).toEqual(
        {
          type: 'ADD_TODO',
          id: 1,
          text: 'My second todo'
        }
      );
    });
  });

  describe('setVisibilityFilter', () => {
    it ('returns an object with the visibility filter attributes', () => {
      expect(actions.setVisibilityFilter('foo')).toEqual(
        {
          type: 'SET_VISIBILITY_FILTER',
          filter: 'foo'
        }
      );
    });
  });

  describe('toggleTodo', () => {
    it ('returns an object with the toggleTodo attributes', () => {
      expect(actions.toggleTodo(1)).toEqual(
        {
          type: 'TOGGLE_TODO',
          id: 1
        }
      )
    });
  });
});
