import React from 'react';
import {isEmpty} from 'lodash';

const TodoItemForm = React.createClass({

    propTypes: {
        callback: React.PropTypes.func.isRequired,
    },

    getInitialState() {
        return { text: "" };
    },

    handleTextChange(e) {
        this.setState({text: e.target.value});
    },

    handleSubmit(e) {
        e.preventDefault();
        if ( !isEmpty(this.state.text) ) {
            this.props.callback(this.state.text);
            this.setState({text: ""});
        } else {
            alert("it's empty, can't add!");
        }
    },

    render() {
        return (
            <form className="todo-item-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Task"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    />
                <input type="submit" value="Add" />
            </form>
        )
    }

});

export default TodoItemForm;