import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List </h2>
      <br />
      <hr />
      {todos.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            text={todoItem.text}
            isCompleted={todoItem.completed}
            id={todoItem.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
