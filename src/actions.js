import reactor from "./reactor.js";
import Immutable from "immutable";
import ActionTypes from "./actionTypes.js";
import Keys from "./Keys.js";
import request from 'request';

const baseRequest = request.defaults({
  headers: {'Accept': 'application/json'},
  json: true
});

const baseUrl = "http://localhost:3000/task_lists";

export default {

    listTodos() {
        baseRequest.get({ url: baseUrl }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                reactor.dispatch(ActionTypes.LIST_TODO_LISTS, Immutable.fromJS(body));
            } else {
                console.log(error);
                console.log(response);
            }
        });
    },

    updateTodoList(name, todos) {
        baseRequest.post({ url: baseUrl + "/create_or_update", body: {
                task_list: {
                    title: name,
                    tasks: todos
                }
            } 
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var list = Immutable.Map()
                    .set(Keys.Properties.TodoList.TITLE, name)
                    .set(Keys.Properties.TodoList.TODOS, todos);

                reactor.dispatch(ActionTypes.UPDATE_TODO_LIST, list);
            } else {
                console.log(error);
                console.log(response);
            }
        });
    },

    addTodoList(name) {
        baseRequest.post({ url: baseUrl + "/create_or_update", body: {
                task_list: {
                    title: name
                }
            } 
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var list = Immutable.Map()
                    .set(Keys.Properties.TodoList.TITLE, name);

                reactor.dispatch(ActionTypes.ADD_TODO_LIST, list);
            } else {
                console.log(error);
                console.log(response);
            }
        });    
    }
}