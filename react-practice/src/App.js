import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My TODO</h1>
      <Todo text="First Todo" />
      <Todo text="Second Todo" />
      <Todo text="Last Todo" />
    </div>
  );
}
export default App;
