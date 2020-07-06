import React from 'react';


import './CommentsForm.scss';

const Comment = ({ id, text, color }) => {
    
    return (
      <div className="Comment">
            <div
                className="Comment-color"
                style={{
                    backgroundColor: color
                }}
            >                
            </div>
          <div className="Comment-text">{text}</div>  
         
      </div>
    );
}

export default Comment;