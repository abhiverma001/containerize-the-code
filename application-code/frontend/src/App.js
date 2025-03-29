import React, { Component } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
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
          <h1>Welcome to My To-Do List</h1>
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
                <div className="welcome-message">
                  <h2>Welcome to My To-Do List App!</h2>
                  <p>Start organizing your day by adding tasks above.</p>
                  <p>“The secret of getting ahead is getting started.” – Abhishek Verma</p>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/31/13/14/checklist-2023731_960_720.png"
                    alt="Welcome Illustration"
                    className="welcome-image"
                  />
                </div>
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

        {/* Footer */}
        <footer className="app-footer">
          <p>Website Author: Abhishek Verma</p>
        </footer>
      </div>
    );
  }
}

export default App;