import AddTodo from "./components/AddTodo";
import Header from "./components/header";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <div className="w-80 m-5 p-3 bg-slate-50 rounded-2xl">
      <Header />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <AddTodo />
    </div>
  );
}

export default App;
