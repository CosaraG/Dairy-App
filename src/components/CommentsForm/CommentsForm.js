import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './CommentsForm.scss';

const CommentsForm = () => {
  return (
    <div className="CommentsForm col-5">
      <div className="CommentsForm-title">Comments hjhvjkgfjk545</div>
        <Form className="CommentsForm-form">
            <Form.Group controlId="formBasicEmail"> 
            <div className="commentColor"></div>           
            <Form.Control type="text" placeholder="Type comment here..." />
            <Button variant="primary">Add New</Button> 
            </Form.Group>
        </Form>
        
    </div>
  );
}

export default CommentsForm;