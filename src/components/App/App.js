import React from 'react';

import './App.scss';

import CommentsForm from '../CommentsForm/CommentsForm';
import TodoForm from '../TodoForm/TodoForm';

import initialTasks from '../../data/tasks';


class App extends React.Component  {
  state = {
    tasks: initialTasks,
    inputValue: '',
  }
  componentDidMount() {
    console.log('didmount');
    const userTasks = localStorage.getItem('userTasks');
    console.log(JSON.parse(userTasks))
    console.log(this.state.tasks);
    if(JSON.parse(userTasks) !== null) {
    this.setState({
      tasks: JSON.parse(userTasks),
    })
    }
  }
  render() { 
    const { tasks, inputValue } = this.state;

    return (
      <div className="App">
          <div className="menuLeft col-2">
            <h1 className="menuLeft-title">Dairy App</h1>
            <div className="menuLeft-comment">Comment with no sense</div>
          </div>
          <div className="menuRight col-10">
            <TodoForm 
              inputValue={inputValue}
              submitTask={this.addTask}
              changeInputValue={this.changeInputValue}
              tasks={tasks}
            />
            <CommentsForm tasks={tasks} />
          </div>
      </div>
    );
  }
}

export default App;
