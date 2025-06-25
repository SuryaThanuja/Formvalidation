import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

 
  componentDidMount() {
    console.log('Todo App Mounted');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      console.log('Tasks updated:', this.state.tasks);
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleAddTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      this.setState({
        tasks: [...tasks, task],
        newTask: '',
      });
    }
  };

  toggleCheckbox = (id) => {
    const updated = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updated });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>📝 Todo List</h2>

        <input
          type="text"
          placeholder="Enter your task..."
          value={this.state.newTask}
          onChange={this.handleInputChange}
          style={styles.input}
        />
        <button onClick={this.handleAddTask} style={styles.button}>Add Task</button>

        <ul style={styles.ul}>
          {this.state.tasks.map((task) => (
            <li key={task.id} style={styles.li}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.toggleCheckbox(task.id)}
              />
              <span style={{
                ...styles.taskText,
                textDecoration: task.completed ? 'line-through' : 'none'
              }}>
                {task.text}
              </span>
              {task.completed && <span style={styles.tick}>✅</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  input: {
    padding: '8px',
    width: '70%',
    marginRight: '10px',
  },
  button: {
    padding: '8px 12px',
    cursor: 'pointer',
  },
  ul: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '20px',
  },
  li: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
  },
  taskText: {
    fontSize: '16px',
  },
  tick: {
    marginLeft: '10px',
    fontSize: '18px',
  }
};

export default TodoApp;
