import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List </h2>
      <br />
      <hr />
      {todos.map((todoItem) => {
        return (
          <TodoItems
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
