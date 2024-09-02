import { createStore } from "redux";
import todoReducer from './todoReducer.js';


const store =createStore(todoReducer);
store.subscribe(()=>{
    console.log(store.getState());
})


export default store;