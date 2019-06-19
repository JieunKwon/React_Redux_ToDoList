# React_Redux_toDoList

@ June 2019

ToDoList App with React Redux

Focused on Immutable.js



> 1. Components

App

Todos

Container/TodosContainer


> 2.  Actions for todos store : store/todo.js

CHANGE_INPUT

INSERT

TOGGLE

REMOVE


> 3. Used immutable List 

  src/store/modules/todo.js
         
        import { List, Map } from 'immutable';
        
        ...
        
         const initialState = Map({
           input: '',
           todos: List()
         });
        
        ...
        
         export default handleActions({ 
           [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
           
           [INSERT]: (state, { payload: text }) => {             
             const item = Map({ id: id++, checked: false, text });  
             return state.update('todos', todos => todos.push(item));
           },
           
           [TOGGLE]: (state, { payload: id }) => { 
             const index = state.get('todos').findIndex(item => item.get('id') === id);
             return state.updateIn(['todos', index, 'checked'], checked => !checked);
           },
           
           [REMOVE]: (state, { payload: id }) => {              
             const index = state.get('todos').findIndex(item => item.get('id') === id);
             return state.deleteIn(['todos', index]);
           }
         }, initialState);



  Components/Todos.js
  
  can set todos using List and Map if need the default todos
         
         import { List, Map } from 'immutable';
         
         ...
         
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

> 4. View this app

To add new todo, input text into text-box.

To remove, double-click an item.

To make todo be done, click an item.


<img src='bagic_todo.JPG' width='500px'>
