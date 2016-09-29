import React from 'react';
import './App.css';
import TodoView from "./TodoView.js";
import Immutable from "immutable";
import NewTodoListView from "./NewTodoListView.js";

const InitialState = Immutable.fromJS({
  "Groceries": [
    "Coconut Milk",
    "Turmeric",
    "Bacon"
  ],
  "Work": [
    "Review pull requests",
    "Finish JIRA issue",
    "Setup retrospective meeting"
  ]
});

const App = React.createClass({

  getInitialState() {
    return {data: InitialState};
  },

  updateList(name, tasks) {
    this.setState({data: this.state.data.set(name, tasks)})
  },

  addNewList(name) {
    this.setState({data: this.state.data.set(name, Immutable.List())});
  },

  render() {
    var todos = this.state.data.map((list, name) => {
      return (<TodoView 
        tasks={list}
        key={name}
        title={name}
        callback={this.updateList.bind(this, name)}
        />);
    }).valueSeq();
    return (
      <div className="App">
        <h1>Libertyjs TODO list</h1>
        {todos}
        <NewTodoListView callback={this.addNewList}/>
      </div>
    );
  }

});

export default App;
