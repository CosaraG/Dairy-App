import React from 'react';
import { Button } from 'react-bootstrap';

import './List.scss';

const Task = ({ id, title, comments, active }) => {
    return (    
        <div className={active ? "task active" : "task"}>
            <div className="task-content">
                <div className="task-content-text">{title}</div>
                <div className="task-content-info">{comments.length}</div>
            </div>
            <Button variant="outline-danger">Delete</Button> 
        </div>        
    );
}

export default Task;