import React from 'react';
import './App.css';
import TodoItem from "./TodoItem.js"
import TodoItemForm from "./TodoItemForm.js"
import {map} from "lodash";

const App = React.createClass({

  getInitialState() {
    return {
      todo: [
        "Buy brussel sprouts",
        "Buy pork roast",
        "Buy tapioca flour"
      ]
    };
  },

  addTask(task) {
    this.setState({todo: this.state.todo.concat(task)});
  },

  render() {
    var todos = map(this.state.todo, (item, index) => {
      return <TodoItem title={item} key={index}/>
    });
    return (
      <div className="App">
        <h1>Libertyjs TODO list</h1>
        <ul>
          {todos}
        </ul>
        <TodoItemForm callback={this.addTask}/>
      </div>
    );
  }

});

export default App;
