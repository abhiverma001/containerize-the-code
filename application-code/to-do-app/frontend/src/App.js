import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css"; // Update your CSS file accordingly

class App extends Tasks {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <div className="app">
                {/* Header Section */}
                <header className="app-header">
                    <h1>🎉 Task Manager - Built by Abhi Verma 🚀</h1>
                    <p className="header-quote">"Organize your tasks, organize your life! 🌟"</p>
                </header>

                {/* Main Content Section */}
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
                                placeholder="Add a fun task 🎯"
                            />
                            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                                ➕ Add Task
                            </Button>
                        </form>
                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div className={task.completed ? "task-text completed" : "task-text"}>
                                        {task.task} 🎉
                                    </div>
                                    <Button onClick={() => this.handleDelete(task._id)} color="secondary" className="delete-task-btn">
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>

                {/* Footer Section */}
                <footer className="app-footer">
                    <p>🌈 "Stay productive, stay happy!" 🌟</p>
                    <p>Made with ❤️ by <span className="author-name">Abhi Verma</span></p>
                </footer>
            </div>
        );
    }
}

export default App;