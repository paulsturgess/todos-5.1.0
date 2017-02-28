import React from 'react';
import { shallow } from 'enzyme'
import Link from '../../components/Link';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

describe('Link', () => {
  let instance, anchor, span;
  let onClick = jest.fn();

  describe('when it is not active', () => {
    beforeEach(() => {
      instance = shallow(
        <Link active={false} onClick={onClick} store={store}>
          {'The Link Text'}
        </Link>
      );
      anchor = instance.find('a');
    });

    it('returns an anchor with children', () => {
      expect(anchor.text()).toEqual('The Link Text');
    });

    it('returns an anchor with the onClick', () => {
      anchor.simulate('click', { preventDefault() {} });
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('when it is active', () => {
    beforeEach(() => {
      instance = shallow(
        <Link active={true} onClick={onClick} store={store}>
          {'The Link Text'}
        </Link>
      );
      span = instance.find('span');
    });

    it('returns a span with children', () => {
      expect(anchor.text()).toEqual('The Link Text');
    });
  });
});
