import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './List.scss';

const Task = ({ id, title, comments, active, deleteTask, handleActiveTask }) => {

    return (    
        <div className={active ? "task active" : "task"}>
            <div className="task-content" onClick={handleActiveTask(id)}>
                <div className="task-content-text">{title}</div>
                <div className="task-content-info">{comments.length}</div>
            </div>
            <Button variant="outline-danger" onClick={deleteTask(id)}>Delete</Button> 
        </div>        
    );
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    active: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
    handleActiveTask: PropTypes.func.isRequired
  };

export default Task;