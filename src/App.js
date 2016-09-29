import React from 'react';
import './App.css';
import TodoView from "./TodoView.js";
import NewTodoListView from "./NewTodoListView.js";
import reactor from "./reactor.js";
import getters from "./getters.js";
import Actions from "./actions.js";
import TodoStore from "./TodoStore.js";

reactor.registerStores({
    "todos" : TodoStore
});

const App = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      todos: getters.todos
    }
  },

  updateList(name, tasks) {
    Actions.updateTodoList(name, tasks);
  },

  addNewList(name) {
    Actions.addTodoList(name);
  },

  render() {
    var todos = this.state.todos.map((list, name) => {
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
