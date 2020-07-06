import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './TodoForm.scss';

import List from '../List/List';

const TodoForm = ({ tasks }) =>  {
  return (
    <div className="TodoForm col-5">

        <div className="TodoForm-title">Items</div>
        <Form className="TodoForm-form">
            <Form.Group controlId="formBasicEmail">            
            <Form.Control type="text" placeholder="Type name here..." />
            <Button variant="info">Add New</Button> 
            </Form.Group>
        </Form>
        <List tasks={tasks} />
    </div>
  );
}

export default TodoForm;