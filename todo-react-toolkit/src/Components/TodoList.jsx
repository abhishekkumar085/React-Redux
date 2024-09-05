import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/todoSlice';

const TodoList = ({ todos, setEditId, setEditText }) => {
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm ${
            todo.isCompleted ? 'bg-gray-100' : 'bg-white'
          }`}
        >
          <span
            className={`flex-1 text-gray-700 ${
              todo.isCompleted ? 'line-through' : ''
            }`}
          >
            {todo.text}
          </span>

          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="px-3 py-1 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>

            <button
              onClick={() => {
                setEditId(todo.id);
                setEditText(todo.text);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
