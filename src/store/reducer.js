// import { combineReducers } from 'redux'
import { ADD, DEL } from './action';

// 纯函数

const defaultState = {
    todoList: []
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    if (action.type === ADD) {
        newState.todoList.push(action.text);
        return newState;
    } else if (action.type === DEL) {
        let index = action.index;
        newState.todoList.splice(index, 1);
        return newState;
    }
}  