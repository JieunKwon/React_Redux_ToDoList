import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({counter, todos}) => {
  return (
    <div className="app-template"> 
      <div className="todos">{todos}</div>
    </div>
  );
};

export default AppTemplate;