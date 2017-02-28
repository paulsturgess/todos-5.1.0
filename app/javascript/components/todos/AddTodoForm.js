import React, { PropTypes } from 'react'

const onSubmit = (event, input, action) => {
  event.preventDefault()
  if (!input.value.trim()) {
    return
  }
  action(input.value);
  input.value = ''
}

const AddTodoForm = ({ addTodo }) => {
  let input;
  return(
  <div>
    <form onSubmit={event => onSubmit(event, input, addTodo)}>
      <input ref={node => {input = node}} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
  );
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodoForm
