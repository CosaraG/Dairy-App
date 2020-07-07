import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import './TodoForm.scss';

import List from '../List/List';

const TodoForm = ({
    todoFormInput, tasks, changeInputValue, addTask,
    deleteTask, handleActiveTask,
}) =>  {
    const handleChange = (event) => {
        const { value, name } = event.target;
        changeInputValue(value, name);
      };

    const handleSubmit = (event) => {
      event.preventDefault();
      addTask();
    };

  return (
    <div className="TodoForm col-5">

        <div className="TodoForm-title">Items</div>
        <Form className="TodoForm-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" >            
            <Form.Control
                type="text"
                placeholder="Type name here..."
                value={todoFormInput}
                name='todoFormInput'
                onChange={handleChange}
            />
            <Button variant="info" onClick={handleSubmit}>Add New</Button> 
            </Form.Group>
        </Form>
        <List tasks={tasks} deleteTask={deleteTask} handleActiveTask={handleActiveTask} />
    </div>
  );
};

TodoForm.propTypes = {
    todoFormInput: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
  };

export default TodoForm;