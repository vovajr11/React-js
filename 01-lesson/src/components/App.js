import React, { Component } from 'react';
import Layout from './Layout/Layout';
// import Counter from './Counter';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import createTask from '../utils/creare-task';

export default class App extends Component {
  state = {
    tasks: [],
  };

  // імутабельна обнова, на базі попереднього робити новий
  // та не міняти на пряму по силці
  addTask = () => {
    const task = createTask();

    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}
