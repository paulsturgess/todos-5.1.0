import React from 'react';
import { shallow } from 'enzyme';
import UndoRedoButtons from '../../components/UndoRedoButtons';

describe('UndoRedoButtons', () => {
  let instance = shallow(<UndoRedoButtons />);

  it('returns 2 buttons', () => {
    let buttons = instance.find('button')
    expect(buttons.length).toEqual(2);
  });
});
