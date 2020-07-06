import React from 'react';

import './List.scss';

import Task from './Task';

const List = ({ tasks, deleteTask, handleActiveTask }) => {
  return (
    <ul className="List">
        {tasks.map(task => (
            <Task key={task.id} {...task} deleteTask={deleteTask} handleActiveTask={handleActiveTask} />
        ))}        
    </ul>
  );
}

export default List;