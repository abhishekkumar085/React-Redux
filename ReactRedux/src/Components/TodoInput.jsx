import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoActionCreator } from '../redux/actions/todoActions';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodoToStore = () => {
    dispatch(addTodoActionCreator(todo));
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
