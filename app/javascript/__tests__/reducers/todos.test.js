import { todos, todo } from '../../reducers/todos';

describe('todos', () => {

  describe('when the action is ADD_TODO', () => {
    let action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'Foo Bar'
    }
    it('adds a todo', () => {
      const newState = todos(undefined, action);
      expect(newState).toEqual(
        [{"id":1,"text":"Foo Bar","completed":false}]
      );
    });
  });

  describe('when the action is unknown', () => {
    let action = {
      type: 'UNKNOWN'
    }
    it('returns the state unchanged', () => {
      const newState = todos([], action);
      expect(newState).toEqual([]);
    })
  });

  describe('when the action is TOGGLE_TODO', () => {
    let originalState = [
      {"id":1,"text":"Foo Bar","completed":false},
      {"id":2,"text":"Foo Bar","completed":true},
    ]
    describe('when toggling a todo that is not completed', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1
      }
      it('sets completed to true', () =>{
        const newState = todos(originalState, action);
        expect(newState).toEqual(
          [
            {"id":1,"text":"Foo Bar","completed":true},
            {"id":2,"text":"Foo Bar","completed":true}
          ]
        )
      });
    });

    describe('when toggling a todo that is completed', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 2
      }
      it('sets completed to false', () =>{
        const newState = todos(originalState, action);
        expect(newState).toEqual(
          [
            {"id":1,"text":"Foo Bar","completed":false},
            {"id":2,"text":"Foo Bar","completed":false}
          ]
        )
      });
    });
  });
});

describe('todo', () => {
  describe('when the action type is unknown', () => {
    let action = {
      type: 'UNKNOWN'
    }
    it('returns the state unchanged', () => {
      const newState = todo({foo: 'bar'}, action);
      expect(newState).toEqual({foo: 'bar'});
    })
  });
})
