export default function List({ todos, delhandler }) {
  if (!todos) {
    return <p>Nothing to display..</p>;
  }
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <p>{todo.text}</p>
          <button onClick={() => delhandler(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
