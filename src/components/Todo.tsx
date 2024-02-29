import React, { useState, useSyncExternalStore } from "react";

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

    console.log(todo);
    const newTodo: ToDo = {
      id: `${todo.length}-${new Date()}`,
      task: todo,
      isCompleted: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
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
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Todo;
