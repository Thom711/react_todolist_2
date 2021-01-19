import './TodoItem.css';
import React from 'react';

class TodoItem extends React.Component {
    render() { 
        const data = this.props.data;

        return (
            <div className="item">
                <input 
                    type="checkbox" 
                    checked={data.completed} 
                    onChange={() => this.props.handleChange(data.id)}
                />
                <p>{data.text}</p>
            </div>
        );
    };
};
export default TodoItem;