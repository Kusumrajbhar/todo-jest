import React from "react";

const Todo = ({ todo }) => {
  const { id, dish, completed } = todo;
  const h1 = <h1>{dish}</h1>;
  const paid = completed ? <strike>{dish}</strike> : h1;

  return (
    <div data-testId={`todo-${id}`}>
      <h1>{paid}</h1>
    </div>
  );
};

export default Todo;
