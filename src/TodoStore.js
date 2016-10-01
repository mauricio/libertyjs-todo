import Immutable from "immutable";
import { Store } from 'nuclear-js';
import ActionTypes from './actionTypes.js';
import Keys from "./Keys.js";

function addTodoList(state, event) {
    return state.set(
        event.get(Keys.Properties.TodoList.TITLE),
        Immutable.List()
    );
}

function updateTodoList(state, event) {
    var title = event.get(Keys.Properties.TodoList.TITLE);
    var tasks = event.get(Keys.Properties.TodoList.TODOS);

    return state.set(title, tasks);
}

function todoListsReceived(state, event) {
    return event.reduce((map, taskList) => {
        return map.set(
            taskList.get("title"), 
            taskList.get("tasks").map((task) => task.get("title")) );
    }, Immutable.Map());
}

export default Store({
    getInitialState() {
        return Immutable.fromJS(
            {
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
            }
        );
    },

    initialize() {
        this.on(ActionTypes.ADD_TODO_LIST, addTodoList);
        this.on(ActionTypes.UPDATE_TODO_LIST, updateTodoList);
        this.on(ActionTypes.LIST_TODO_LISTS, todoListsReceived);
    }
});
