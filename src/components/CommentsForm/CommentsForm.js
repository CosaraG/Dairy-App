import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import './CommentsForm.scss';

import Comment from './Comment';

class CommentsForm extends React.Component {
  handleSubmit = () => {
    const { tasks, addComment, commentsInput } = this.props;
    if(tasks.length > 0 && commentsInput != '') {
      const activeTask = tasks.filter(task => task.active);    
      addComment(activeTask[0].id);
    }
  }

  keydownHandler = (e) => {
    if(e.keyCode===13 && e.ctrlKey) {this.handleSubmit()}
  }
  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler);
  }

    render () {
      const {
        tasks, commentsInput, changeInputValue, colorPicker,
        background,
      } = this.props;
      const activeTask = tasks.filter(task => task.active);
    
      let showComments = tasks.length>0 ? activeTask[0].comments.length !== 0 : null;

      const handleChange = (event) => {
        const { value, name } = event.target;
        changeInputValue(value, name);
      };

    return (
      <div className="CommentsForm col-5">
        <div className="CommentsForm-title">Comments #{tasks.length > 0 ? activeTask[0].id : ''}</div>
        {showComments && tasks.length > 0 && activeTask[0].comments.map(comment => (
            <Comment key={comment.id} {...comment} />
        ))}
        <Form className="CommentsForm-form">
            <Form.Group controlId="formBasicEmail"> 
            <div className="commentColor" onClick={colorPicker} style={{
              backgroundColor: background
            }}></div>           
            <Form.Control
              value={commentsInput}
              name='commentsInput'
              as="textarea" rows="2"
              placeholder="Type comment here..."
              onChange={handleChange}
            />
            <Button variant="primary" onClick={this.handleSubmit}>Add New</Button> 
            </Form.Group>
        </Form>
          
      </div>
    );
}
}

CommentsForm.propTypes = {
  commentsInput: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentsForm;