# React_Redux_toDoList

@ June 2019

ToDoList App with React Redux

Focused on Immutable.js



1. Components

App

Todos

Container/TodosContainer


2. Actions for todos store

CHANGE_INPUT

INSERT

TOGGLE

REMOVE


3. Used immutable

         // Todos.js
         
        import { List, Map } from 'immutable';
        
        ...
        
        // Map for the default todos 
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
