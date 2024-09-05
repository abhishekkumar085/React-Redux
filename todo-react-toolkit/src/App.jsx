import React from 'react';
import TodoInput from './Components/TodoInput';
import { useSelector } from 'react-redux';
import TodoList from './Components/TodoList';

const App = () => {
  const data = useSelector((state) => state.todo.todos);
  console.log(data, 'tododododo');
  return (
    <div>
      <h1>Todo - Redux Toolkit</h1>
      <TodoInput />
      <TodoList todos={data} />
    </div>
  );
};

export default App;
