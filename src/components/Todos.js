import React from 'react';
import { List, Map } from 'immutable';

const TodoItem = ({ id, text, checked, onToggle, onRemove, onChange }) => (
  <div className='todo_item' style={{
      backgroundColor: checked ? '#dddddd' : '#lightblue'
  }}>
  <div
    style={{
      textDecoration: checked ? 'line-through' : 'none'
    }}

    onDoubleClick={() => onRemove(id)}>
    {text}
  </div>
  <button onClick={() => onToggle(id)}>
  {checked ? 'Undo' : 'Done'}
   </button>
  <button onClick={() => onRemove(id)}> Remove </button>
  </div>
)

const Todos = ({todos, input, onInsert, onToggle, onRemove, onChange }) => {

  const todoItems = todos.map(
    todo => {
      const { id, checked, text } = todo.toJS();
      return (
        <TodoItem
          id={id}
          checked={checked}
          text={text}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    }
  )
  return (
    <div>
      <h2>To-do Lists</h2>
      <textarea value={input} onChange={onChange}/>
      <button onClick={onInsert}> ADD </button>
      <div>
        { todoItems }
      </div>
    </div>
  );
};

Todos.defaultProps = {
  todos: List([
    Map({
      id: 0,
      text: 'Go to TD',
      checked: false
    }),
    Map({
      id: 1,
      text: 'Study Redux',
      checked: true
    })
  ]),
  input: ''
};

export default Todos;
