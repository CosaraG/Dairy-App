import React from 'react';
import { nanoid } from 'nanoid'

import './App.scss';

import CommentsForm from '../CommentsForm/CommentsForm';
import TodoForm from '../TodoForm/TodoForm';

import initialTasks from '../../data/tasks';


class App extends React.Component  {
  state = {
    tasks: initialTasks,
    todoFormInput: '',
    commentsInput: 'hello',
  }
  componentDidMount() {
    const userTasks = localStorage.getItem('userTasks');
    if(JSON.parse(userTasks) !== null) {
    this.setState({
      tasks: JSON.parse(userTasks),
    })
    }
  }

  changeInputValue = (newInputValue) => {
    this.setState({
      todoFormInput: newInputValue,
    });
  }

  addTask = () => {
    const presentsTasks = this.state.tasks;
    // je peux accéder au state donc à inputValue
    const { todoFormInput } = this.state;

    const newTask = {
      id: nanoid(),
      title: todoFormInput,
      active: false,
      comments: [],
    };

    console.log(newTask.id);

    const updatedTasks = [
      ...presentsTasks,
      newTask,
    ];
    localStorage.setItem('userTasks', JSON.stringify(updatedTasks));

    // on modifie le state via setState
    this.setState({
      tasks: updatedTasks,
      todoFormInput: '',
    });
  }

  deleteTask = taskId => () => {
    const { tasks: presentsTasks } = this.state;
    const tasksWithoutDeleted = presentsTasks.filter(task => taskId !== task.id);
    const hasActiveTask = tasksWithoutDeleted.filter(task => task.active);
    if(hasActiveTask.length === 0) {
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


  render() { 
    const { tasks, todoFormInput, commentsInput } = this.state;

    return (
      <div className="App">
          <div className="menuLeft col-2">
            <h1 className="menuLeft-title">Dairy App</h1>
            <div className="menuLeft-comment">Comment with no sense</div>
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
            />
          </div>
      </div>
    );
  }
}

export default App;
