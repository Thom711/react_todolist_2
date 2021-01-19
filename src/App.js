import './App.css';
import React from 'react';
import TodosData from './data/TodoData';
import TodoItem from './components/TodoItem';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: TodosData
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            console.log('oude array todos', prevState.todos);

            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                };

                console.log('aangepaste todo', todo);
                return todo;
            });

            console.log('nieuwe array todos', updatedTodos);

            return {
                todos: updatedTodos
            };
        });
    };

    render() {
        const mappedTodos = this.state.todos.map((data) => {
            return <TodoItem key={data.id} data={data} handleChange={this.handleChange}/>
        });

        return (
            <div className="App">
                {mappedTodos}
            </div>
        );
    };
};

export default App;