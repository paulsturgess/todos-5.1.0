import React from 'react'
import TodoFilters from './TodoFilters'
import AddTodoForm from '../../containers/todos/AddTodoFormContainer'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import UndoRedo from '../../containers/UndoRedo'

const TodoScreen = () => (
  <div>
    <AddTodoForm />
    <VisibleTodoList />
    <TodoFilters />
    <UndoRedo />
  </div>
)

export default TodoScreen
