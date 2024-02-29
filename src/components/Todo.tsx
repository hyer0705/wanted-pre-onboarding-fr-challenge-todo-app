function Todo() {
  const todos = [
    { id: 1, task: "todo app add 기능 구현하기", isCompleted: false },
    { id: 2, task: "todo app delete 기능 구현하기", isCompleted: false },
    { id: 3, task: "todo app style 입히기", isCompleted: false },
  ];
  return (
    <main>
      <form>
        <input type="text" placeholder="할 일을 입력해주세요." />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
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
