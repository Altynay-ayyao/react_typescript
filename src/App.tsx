
import React from "react";
import TodoList from "./components/TodoList";

/* function App() {
  return (
    <div className="App">
     
    </div>
  );
} */
const App:React.FC=()=>{
  const todos = [{id:'t1', text:'walk 10km'}]
  return (<div>{/*A component that adds todos */}
  <TodoList items={todos}/>
  </div>)

}

export default App;
