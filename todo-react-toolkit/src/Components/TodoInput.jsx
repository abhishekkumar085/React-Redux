import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice'; // Add an update action

const TodoInput = ({ editId, editText, setEditText, setEditId }) => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  // Prepopulate the input field if editing
  useEffect(() => {
    if (editId !== null) {
      setTodo(editText);
    }
  }, [editId, editText]);

  const addOrUpdateTodo = () => {
    if (editId !== null) {
      // Update existing todo
      dispatch(updateTodo({ id: editId, text: todo }));
      setEditId(null); // Clear editing state
    } else {
      // Add new todo
      dispatch(addTodo(todo));
    }
    setTodo(''); // Clear input field after action
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addOrUpdateTodo}>
        {editId !== null ? 'Update Todo' : 'Add Todo'}
      </button>
    </div>
  );
};

export default TodoInput;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../redux/todoSlice';

// const TodoInput = () => {
//   const [todo, setTodo] = useState('');
//   const dispatch = useDispatch();
//   const addTodoToStore = () => {
//     dispatch(addTodo(todo));
//     console.log(todo, 'todo');
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setTodo(e.target.value)}
//         value={todo}
//       />
//       <button onClick={addTodoToStore}>Add Todo..</button>
//     </div>
//   );
// };

// export default TodoInput;
