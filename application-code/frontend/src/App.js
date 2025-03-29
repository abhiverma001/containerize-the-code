import React, { Component } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import Tasks from "./Tasks";
import "./App.css"; // Ensure your CSS is updated accordingly

class App extends Component {
  // Initializing state
  state = {
    tasks: [],
    currentTask: "",
  };

  // Method to handle changes in the input field
  handleChange = (event) => {
    this.setState({
      currentTask: event.target.value,
    });
  };

  // Method to handle task submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { currentTask, tasks } = this.state;

    if (currentTask.trim()) {
      const newTask = {
        _id: tasks.length + 1, // Or you can generate an actual unique ID
        task: currentTask,
        completed: false,
      };

      this.setState({
        tasks: [...tasks, newTask],
        currentTask: "", // Clear the input field after adding the task
      });
    }
  };

  // Method to toggle completion of a task
  handleUpdate = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task._id === taskId ? { ...task, completed: !task.completed } : task
    );

    this.setState({
      tasks: updatedTasks,
    });
  };

  // Method to delete a task
  handleDelete = (taskId) => {
    const filteredTasks = this.state.tasks.filter((task) => task._id !== taskId);

    this.setState({
      tasks: filteredTasks,
    });
  };

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1>My To-Do List</h1>
        </header>

        <div className="main-content">
          <Paper elevation={3} className="todo-container">
            <form onSubmit={this.handleSubmit} className="task-form">
              <TextField
                variant="outlined"
                size="small"
                className="task-input"
                value={currentTask}
                required={true}
                onChange={this.handleChange}
                placeholder="Add New TO-DO"
              />
              <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                Add Task
              </Button>
            </form>

            {/* Task List */}
            <div className="tasks-list">
              {tasks.length === 0 ? (
                <div className="no-tasks-message">No tasks to display</div>
              ) : (
                tasks.map((task) => (
                  <Paper key={task._id} className="task-item">
                    <Checkbox
                      checked={task.completed}
                      onClick={() => this.handleUpdate(task._id)}
                      color="primary"
                    />
                    <div
                      className={task.completed ? "task-text completed" : "task-text"}
                    >
                      {task.task}
                    </div>
                    <Button
                      onClick={() => this.handleDelete(task._id)}
                      color="secondary"
                      className="delete-task-btn"
                    >
                      Delete
                    </Button>
                  </Paper>
                ))
              )}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
