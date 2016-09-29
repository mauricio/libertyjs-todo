import reactor from "./reactor.js";
import Immutable from "immutable";
import ActionTypes from "./actionTypes.js";
import Keys from "./Keys.js";

export default {
    updateTodoList(name, todos) {
        var list = Immutable.Map()
            .set(Keys.Properties.TodoList.TITLE, name)
            .set(Keys.Properties.TodoList.TODOS, todos);

        reactor.dispatch(ActionTypes.UPDATE_TODO_LIST, list);
    },

    addTodoList(name) {
        var list = Immutable.Map()
            .set(Keys.Properties.TodoList.TITLE, name);

        reactor.dispatch(ActionTypes.ADD_TODO_LIST, list);        
    }
}