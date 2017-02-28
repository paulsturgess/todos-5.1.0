import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import TodoScreen from '../components/todos/TodoScreen';

const store = createStore(reducer)

document.addEventListener("DOMContentLoaded", e => {
  render((
    <Provider store={store}>
      <TodoScreen />
    </Provider>
    ),
    document.getElementById('todos')
  )
})
