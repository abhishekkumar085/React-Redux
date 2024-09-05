import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state, action)=> {
        // state.push({id: new Date().getTime(), text: action.payload, isCompleted: false})
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: new Date().getTime(), text: action.payload, isCompleted: false },
        ],
      };
    },
    removeTodo(state, action) {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    toggleTodo(state, action) {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        }),
      };
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
