import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './CommentsForm.scss';

import Comment from './Comment';

const CommentsForm = ({ tasks }) => {
    const activeTask = tasks.filter(task => task.active);
    console.log(activeTask[0]);
    let showComments = activeTask[0].comments.length !== 0;

    return (
      <div className="CommentsForm col-5">
        <div className="CommentsForm-title">Comments #{activeTask[0].id}</div>
        {showComments && activeTask[0].comments.map(comment => (
            <Comment key={comment.id} {...comment} />
        ))}
        <Form className="CommentsForm-form">
            <Form.Group controlId="formBasicEmail"> 
            <div className="commentColor"></div>           
            <Form.Control value='salut' as="textarea" rows="2" placeholder="Type comment here..." />
            <Button variant="primary">Add New</Button> 
            </Form.Group>
        </Form>
          
      </div>
    );
}

export default CommentsForm;