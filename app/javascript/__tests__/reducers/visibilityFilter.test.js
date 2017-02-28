import visibilityFilter from '../../reducers/visibilityFilter';

describe('visibilityFilter', () => {

  describe('when the action type is SET_VISIBILITY_FILTER', () => {
    const action = {type: 'SET_VISIBILITY_FILTER', filter: 'BAR'}
    it('returns the action filter', () => {
      expect(visibilityFilter('FOO', action)).toEqual('BAR')
    });
  });

  describe('when the state is undefined and the action type is not SET_VISIBILITY_FILTER', () => {
    const action = {type: 'UNKNOWN'}
    it('returns the default action type', () => {
      expect(visibilityFilter(undefined, action)).toEqual('SHOW_ALL')
    });
  });
});
