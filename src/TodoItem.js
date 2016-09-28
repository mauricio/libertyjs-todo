import React from 'react';

const TodoItem = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render() {
        return (
            <li>
                {this.props.title}
            </li>
        );
    }

});

export default TodoItem;