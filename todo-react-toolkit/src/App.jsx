import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [editId, setEditId] = useState(null); // Track the todo being edited
  const [editText, setEditText] = useState(''); // Track the text to edit

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Todo - Redux Toolkit
      </h1>
      <TodoInput
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        setEditId={setEditId}
      />
      <TodoList todos={todos} setEditId={setEditId} setEditText={setEditText} />
    </div>
  );
};

export default App;
