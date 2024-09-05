// import React from 'react';
// import TodoInput from './Components/TodoInput';
// import { useSelector } from 'react-redux';
// import TodoList from './Components/TodoList';

// const App = () => {
//   const data = useSelector((state) => state.todo.todos);
//   console.log(data, 'tododododo');
//   return (
//     <div>
//       <h1>Todo - Redux Toolkit</h1>
//       <TodoInput />
//       <TodoList todos={data} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [editId, setEditId] = useState(null); // Track the todo being edited
  const [editText, setEditText] = useState(''); // Track the text to edit

  return (
    <div>
      <h1>Todo - Redux Toolkit</h1>
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
