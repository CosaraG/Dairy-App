import React from 'react';

import './App.scss';
import CommentsForm from '../CommentsForm/CommentsForm';
import TodoForm from '../TodoForm/TodoForm';
import { Container, Row, Col } from 'react-bootstrap';

const App = () =>  {
  return (
    <div className="App">
        <div className="menuLeft col-2">
          <h1 className="menuLeft-title">Dairy App</h1>
          <div className="menuLeft-comment">Comment with no sense</div>
        </div>
        <div className="menuRight col-10">
          <TodoForm />
          <CommentsForm />
        </div>
    </div>
  );
}

export default App;
