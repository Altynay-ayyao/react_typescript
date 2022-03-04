
import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

/* function App() {
  return (
    <div className="App">
     
    </div>
  );
} */
const App:React.FC=()=>{
  const todos = [{id:'t1', text:'walk 10km'}]
  return (<div><NewTodo/>
  <TodoList items={todos}/>
  </div>)

}

export default App;
