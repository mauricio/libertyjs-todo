import React, { Component } from 'react';
import './App.css';
import TodoItem from "./TodoItem.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Libertyjs TODO list</h1>
          <ul>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
          </ul>
      </div>
    );
  }
}

export default App;
