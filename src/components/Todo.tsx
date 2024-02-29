import React, { useState } from "react";

function Todo() {
  const todos = [
    { id: 1, task: "todo app add 기능 구현하기", isCompleted: false },
    { id: 2, task: "todo app delete 기능 구현하기", isCompleted: false },
    { id: 3, task: "todo app style 입히기", isCompleted: false },
  ];

  const [todo, setTodo] = useState("");

  const onTodoChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = ev;

    setTodo(value);
  };

  return (
    <main>
      <form>
        <input
          value={todo}
          onChange={onTodoChange}
          type="text"
          placeholder="할 일을 입력해주세요."
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Todo;
