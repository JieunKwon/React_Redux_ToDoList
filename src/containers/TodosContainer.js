import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => { 
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    // add item
    const { input, TodoActions } = this.props;
    TodoActions.insert(input); // insert
    TodoActions.changeInput('');  
  }

  handleToggle = (id) => {
    // make item Done or Not
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    // delete item
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  
  ({ todo }) => ({
    // immutable - get
    input: todo.get('input'),
    todos: todo.get('todos')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
