import React from 'react';
import { Button } from 'react-bootstrap';

import './List.scss';

const List = () => {
  return (
    <div className="List">
        <div className="task">
            <div className="task-content">
                <div className="task-content-text">title</div>
                <div className="task-content-info">0</div>
            </div>
            <Button variant="outline-danger">Delete</Button> 
        </div>
        <div className="task">
            <div className="task-content">
                <div className="task-content-text">title</div>
                <div className="task-content-info">0</div>
            </div>
            <Button variant="outline-danger">Delete</Button> 
        </div>

        <div className="task">
            <div className="task-content">
                <div className="task-content-text">title</div>
                <div className="task-content-info">0</div>
            </div>
            <Button variant="outline-danger">Delete</Button> 
        </div>
    </div>
  );
}

export default List;