import React from 'react';
import { nanoid } from 'nanoid';
import { ChromePicker } from 'react-color';

import './App.scss';

import CommentsForm from '../CommentsForm/CommentsForm';
import TodoForm from '../TodoForm/TodoForm';


class App extends React.Component  {
  state = {
    tasks: [],
    todoFormInput: '',
    commentsInput: '',
    background: 'black',
    pickerActive: false,
  }
  componentDidMount() {
    const userTasks = localStorage.getItem('userTasks');
    if(JSON.parse(userTasks) !== null) {
    this.setState({
      tasks: JSON.parse(userTasks),
    })
    }
  }

  changeInputValue = (value, name) => {
    this.setState({
      [name]: value,
    });
  }

  addTask = () => {
    const presentsTasks = this.state.tasks;
    const { todoFormInput } = this.state;
    let newTask = null;

    if(presentsTasks.length === 0) {
        newTask = {
        id: nanoid(),
        title: todoFormInput,
        active: true,
        comments: [],
      };
    } else {
        newTask = {
        id: nanoid(),
        title: todoFormInput,
        active: false,
        comments: [],
      };
    }
    

    const updatedTasks = [
      ...presentsTasks,
      newTask,
    ];
    localStorage.setItem('userTasks', JSON.stringify(updatedTasks));

    this.setState({
      tasks: updatedTasks,
      todoFormInput: '',
      commentsInput: '',
    });
  }

  deleteTask = taskId => () => {
    const { tasks: presentsTasks } = this.state;
    const tasksWithoutDeleted = presentsTasks.filter(task => taskId !== task.id);
    const hasActiveTask = tasksWithoutDeleted.filter(task => task.active);
    if(hasActiveTask.length === 0 && tasksWithoutDeleted.length > 0) {
      tasksWithoutDeleted[tasksWithoutDeleted.length-1].active = true;
    };
    localStorage.setItem('userTasks', JSON.stringify(tasksWithoutDeleted));
    this.setState({
      tasks: tasksWithoutDeleted,
    });
  }

  handleActiveTask = taskId => () => {
    const { tasks: presentsTasks } = this.state;
    const tasksModified = presentsTasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          active: true,
        };
      }
      if (taskId !== task.id) {
        return {
          ...task,
          active: false,
        };
      }
      return task;
    });
    this.setState({
      tasks: tasksModified,
    });  
  }

  addComment = taskId => {
    const presentsTasks = this.state.tasks;
    const { commentsInput } = this.state;

    const newComment = {
      id: nanoid(),
      text: commentsInput,
      color: this.state.background,      
    };

    const newCom = presentsTasks.filter(task=>taskId === task.id);


    const updatedComment = [
      ...newCom[0].comments,
      newComment,
    ];
    
    newCom[0].comments = updatedComment;

    const updatedTasks = [
      ...presentsTasks,
      
    ];
    localStorage.setItem('userTasks', JSON.stringify(updatedTasks));   
    this.setState({      
      tasks: updatedTasks,  
      commentsInput: '',
      background: 'black',
    });
    this.handleClose();
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  colorPicker = () => {
    this.setState({
      pickerActive: !this.state.pickerActive
    });
  }

  handleClose = () => {
    this.setState({ pickerActive: false })
  };


  render() { 
    const { tasks, todoFormInput, commentsInput, background } = this.state;

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <div className="App">
          <div className="menuLeft col-2">
            <h1 className="menuLeft-title">Dairy App</h1>
            <div className="menuLeft-comment">Comment with no sense</div>
            { this.state.pickerActive ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleClose }/>
              <ChromePicker 
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
              />
            </div> : null }
            
          </div>
          <div className="menuRight col-10">
            <TodoForm 
              todoFormInput={todoFormInput}
              addTask={this.addTask}
              changeInputValue={this.changeInputValue}
              tasks={tasks}
              deleteTask={this.deleteTask}
              handleActiveTask={this.handleActiveTask}
            />
            <CommentsForm
              tasks={tasks}
              commentsInput={commentsInput}
              changeInputValue={this.changeInputValue}   
              addComment={this.addComment}
              colorPicker={this.colorPicker} 
              background={background}          
            />
          </div>
      </div>
    );
  }
}

export default App;
