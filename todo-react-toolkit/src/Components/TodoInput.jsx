import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodoToStore = () => {
    dispatch(addTodo(todo));
    console.log(todo, 'todo');
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodoToStore}>Add Todo..</button>
    </div>
  );
};

export default TodoInput;
