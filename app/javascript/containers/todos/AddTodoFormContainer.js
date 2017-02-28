import { connect } from 'react-redux';
import AddTodoForm from '../../components/todos/AddTodoForm'
import actions from '../../actions/todos';

export const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(actions.addTodo(value))
})

const AddTodoFormContainer = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodoFormContainer
