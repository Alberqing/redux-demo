import React from 'react';
import TodoList from './todoList/TodoList';
import { Provider } from 'react-redux';
import store from './redux-store';

function App() {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
}

export default App;