import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { fetchUsers } from './redux/userSlice';

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [editId, setEditId] = useState(null); // Track the todo being edited
  const [editText, setEditText] = useState(''); // Track the text to edit

  const dispatch=useDispatch();
  const {users,status,error}=useSelector((state)=>state.user);

  console.log(users,status,error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 min-h-full">
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

      <div>

      </div>
    </div>
  );
};

export default App;
