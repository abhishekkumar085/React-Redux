import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: new Date().getTime(),
        text: action.payload,
        isCompleted: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {
//     addTodo:(state, action)=> {
//         // state.push({id: new Date().getTime(), text: action.payload, isCompleted: false})
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           { id: new Date().getTime(), text: action.payload, isCompleted: false },
//         ],
//       };
//     },
//     removeTodo(state, action) {
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     },
//     toggleTodo(state, action) {
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id !== action.payload) {
//             return {
//               ...todo,
//               completed: !todo.completed,
//             };
//           }
//         }),
//       };
//     },
//   },
// });

// export default todoSlice.reducer;

// export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
