import store from "./store.js";
import {addTodoActionCreator, removeTodoActionCreator} from './actionCreator.js'
console.log(store.getState());
store.dispatch(addTodoActionCreator('Buy milk'))
store.dispatch(addTodoActionCreator('Buy egg'))
store.dispatch(addTodoActionCreator('Buy coffee'))


store.dispatch(removeTodoActionCreator(store.getState().todos[0].id))