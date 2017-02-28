import React from 'react';
import { mount } from 'enzyme';
import Todo from '../../../components/todos/Todo';

describe('Todo', () => {
  let instance, li;
  let onClick = jest.fn();

  describe('when completed is true', () => {
    beforeEach(() => {
      instance = mount(
        <Todo onClick={onClick} completed={true} text='The Todo' />
      )
      li = instance.find('li');
    });

    it('outputs the todo text', () => {
      expect(li.text()).toEqual('The Todo');
    });

    it('sets up the onClick', () => {
      li.simulate('click', { preventDefault() {} })
      expect(onClick).toHaveBeenCalled();
    });
    it('sets the text decoration to line-through', () => {
      expect(li.get(0).style.cssText).toEqual('text-decoration: line-through;');
    });
  });

  describe('when completed is false', () => {
    beforeEach(() => {
      instance = mount(
        <Todo onClick={onClick} completed={false} text='The Todo' />
      )
      li = instance.find('li');
    });

    it('sets the text decoration to none', () => {
      expect(li.get(0).style.cssText).toEqual('text-decoration: none;');
    });
  });
});
