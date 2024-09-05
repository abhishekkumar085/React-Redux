import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';

const TodoInput = ({ editId, editText, setEditText, setEditId }) => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editId !== null) {
      setTodo(editText);
    }
  }, [editId, editText]);

  const addOrUpdateTodo = () => {
    if (!todo.trim()) {
      return;
    }
    if (editId !== null) {
      dispatch(updateTodo({ id: editId, text: todo }));
      setEditId(null); // Clear editing state
    } else {
      dispatch(addTodo(todo));
    }

    setTodo(''); // Clear input field after action
  };

  return (
    <div className="flex flex-col items-center space-y-4 mb-4">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your todo..."
      />
      <button
        onClick={addOrUpdateTodo}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 "
      >
        {editId !== null ? 'Update Todo' : 'Add Todo'}
      </button>
    </div>
  );
};

export default TodoInput;
