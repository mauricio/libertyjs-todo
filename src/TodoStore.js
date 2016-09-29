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
    }
});
