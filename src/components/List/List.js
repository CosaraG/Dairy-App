import React from 'react';
import { Button } from 'react-bootstrap';

import './List.scss';

import Task from './Task';

const List = ({ tasks }) => {
  return (
    <ul className="List">
        {tasks.map(task => (
            <Task key={task.id} {...task} />
        ))}        
    </ul>
  );
}

export default List;