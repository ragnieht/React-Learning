import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="One" time="1212" />
      <Todo text="Two" time="2323" />
      <Todo text="Three" />
    </div>
  );
}

export default App;
