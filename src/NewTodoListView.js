import React from 'react';
import {isEmpty} from 'lodash';

const NewTodoListView = React.createClass({

    propTypes: {
        callback: React.PropTypes.func.isRequired,
    },

    getInitialState() {
        return { text: "" };
    },

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    },

    handleSubmit(e) {
        e.preventDefault();
        if (!isEmpty(this.state.text)) {
            this.props.callback(this.state.text);
            this.setState({ text: "" });
        } else {
            alert("it's empty, can't add!");
        }
    },

    render() {
        return (
            <div>
                <h2>Create a new list</h2>
                <form className="todo-list-name-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="List name"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }

});

export default NewTodoListView;