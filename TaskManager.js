


import React from 'react';

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  componentDidMount() {
   
    const mockTasks = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Do exercise', completed: false },
    ];
    this.setState({ tasks: mockTasks });
    console.log('Component Mounted: Tasks Loaded');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      console.log('Component Updated: Tasks Changed');
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount: Cleanup done');
  }

  handleAddTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      this.setState({ tasks: [...tasks, newTaskObj], newTask: '' });
    }
  };

  handleComplete = (id) => {
    const updated = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updated });
  };

  handleDelete = (id) => {
    const filtered = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: filtered });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div style={{ padding: '20px' }}>
        <h2>Task Manager</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
        />
        <button onClick={this.handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginRight: '10px',
                }}
              >
                {task.text}
              </span>
              <button onClick={() => this.handleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => this.handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskManager;