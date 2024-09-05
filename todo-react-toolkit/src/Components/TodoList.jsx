import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/todoSlice';

const TodoList = ({ todos, setEditId, setEditText }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.isCompleted ? 'Undo' : 'Complete'}
          </button>

          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>

          {/* Set editId and editText for editing */}
          <button onClick={() => {
            setEditId(todo.id);
            setEditText(todo.text);
          }}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

// import React from 'react';
// import TodoItems from './TodoItems';

// const TodoList = ({ todos }) => {
//   return (
//     <div>
//       <h2>Todo List </h2>
//       <br />
//       <hr />
//       {todos.map((todoItem) => {
//         return (
//           <TodoItems
//             key={todoItem.id}
//             text={todoItem.text}
//             isCompleted={todoItem.completed}
//             id={todoItem.id}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default TodoList;
