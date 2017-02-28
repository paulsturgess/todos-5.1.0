// Container components connect the presentational components to Redux

import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/todos'
import TodoList from '../../components/todos/TodoList'

// returns an array of todos for the corresponding filter
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// mapStateToProps defines how to transform the current Redux store
// state into the props you want to pass to the presentational component
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  }
})

// A container component is just a React component that uses store.subscribe()
// to read a part of the Redux state tree and supply props to a
// presentational component it renders
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
// Note that TodoList component takes two props:
// The todos array and the onClick function

export default VisibleTodoList
