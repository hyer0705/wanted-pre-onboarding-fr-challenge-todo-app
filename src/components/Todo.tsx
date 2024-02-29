import React, { useState } from "react";

interface ToDo {
  id: string;
  task: string;
  isCompleted: boolean;
}

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const onTodoChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = ev;

    setTodo(value);
  };

  const onTodoFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const newTodo: ToDo = {
      id: `${todos.length}-${new Date().getTime()}`,
      task: todo,
      isCompleted: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  const onDeleteBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {
        dataset: { id },
      },
    } = ev;

    setTodos((prev) => {
      // find id
      const deleteIdx = todos.findIndex((todo) => todo.id === id);

      return [...prev.slice(0, deleteIdx), ...prev.slice(deleteIdx + 1)];
    });
  };

  return (
    <main>
      <form onSubmit={onTodoFormSubmit}>
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
            <button data-id={todo.id} onClick={onDeleteBtnClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Todo;
