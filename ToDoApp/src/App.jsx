import AddTodo from "./components/AddTodo";
import Header from "./components/header";
import TodoItems from "./components/TodoItems";
import UseStateExampal from "./components/UseStateExampal";

function App() {
  return (
    <div className="w-80 m-5 p-3 bg-slate-50 rounded-2xl">
      <UseStateExampal />
      <Header title={"Todoio App"} />
      <TodoItems text={"Eat"} />
      <TodoItems text={"Code"} />
      <TodoItems text={"Learn"} />
      <TodoItems completed={true} text={"Sleep"} />
      <TodoItems text={"Care"} />
      <AddTodo />
    </div>
  );
}

export default App;
