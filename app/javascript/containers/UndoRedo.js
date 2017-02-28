import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoRedoButtons from '../components/UndoRedoButtons'

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

const UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedoButtons)

export default UndoRedo
