import React from 'react';
import TodoItem from "./TodoItem.js";
import TodoItemForm from "./TodoItemForm.js";

const TodoView = React.createClass({

    propTypes: {
        callback: React.PropTypes.func.isRequired,
        tasks: React.PropTypes.object.isRequired,
        title: React.PropTypes.string.isRequired
    },

    addTask(task) {
        var tasks = this.props.tasks.push(task);
        this.props.callback(tasks);
    },

    render() {
        var todos = this.props.tasks.map((item, index) => {
            return <TodoItem title={item} key={index}/>
        });
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <ul>
                    {todos}
                </ul>
                <TodoItemForm callback={this.addTask}/>
            </div>
        );
    }

});

export default TodoView;