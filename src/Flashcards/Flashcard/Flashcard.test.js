import React from 'react';
import { shallow, mount } from 'enzyme';
import Flashcard from './index';

it('should render an h3 when a string of length less than 100 is passed', () => {
  const item = {
    type: 'string',
    display: 'test'
  }
  const wrapper = mount(<Flashcard front={item} back={item}/>);
  expect(wrapper.find('h3').length).toBe(1);
  expect(wrapper.find('p').length).toBe(0);
  expect(wrapper.find('img').length).toBe(0);
  wrapper.unmount();
});

it('should render a p when a string of length more than 100 is passed', () => {
  const item = {
    type: 'string',
    display: ''.padStart(101, 'x')
  }
  const wrapper = mount(<Flashcard front={item} back={item}/>);
  expect(wrapper.find('h3').length).toBe(0);
  expect(wrapper.find('img').length).toBe(0);
  expect(wrapper.find('p').length).toBe(1);
  wrapper.unmount();
});

it('should render an img when a type image is passed', () => {
  const item = {
    type: 'image',
    display: 'test'
  }
  const wrapper = mount(<Flashcard front={item} back={item}/>);
  expect(wrapper.find('h3').length).toBe(0);
  expect(wrapper.find('img').length).toBe(1);
  expect(wrapper.find('p').length).toBe(0);
  wrapper.unmount();
});

it('should render the front of the card on init', () => {
  const item = {
    type: 'image',
    display: 'test'
  }
  const wrapper = shallow(<Flashcard front={item} back={item}/>);
  expect(wrapper.find('.Flashcard--front').length).toBe(1);
  expect(wrapper.find('.Flashcard--back').length).toBe(0);
});

it('Should render back of card when clicked, and then front of card when clicked again', () => {
  const item = {
    type: 'image',
    display: 'test',
    setFlippedState: () => {
      jest.fn();
    }
  }
  const wrapper = mount(<Flashcard front={item} back={item} setFlippedState={item.setFlippedState}/>);
  expect(wrapper.find('.Flashcard--front').length).toBe(1);
  expect(wrapper.find('.Flashcard--back').length).toBe(0);
  wrapper.simulate('click');
  expect(wrapper.find('.Flashcard--front').length).toBe(0);
  expect(wrapper.find('.Flashcard--back').length).toBe(1);
  wrapper.simulate('click');
  expect(wrapper.find('.Flashcard--front').length).toBe(1);
  expect(wrapper.find('.Flashcard--back').length).toBe(0);
  wrapper.unmount();
});