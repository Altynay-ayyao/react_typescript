
import React ,{useState}from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model';


const App:React.FC=()=>{
  
  //const todos = [{id:'t1', text:'walk 10km'}];´
  //const todos = useState([]);
  const [todos,setTodos]=useState<Todo[]>([]);
  const todoHandler=(text:string)=>{
    setTodos((prevTodos)=>[
      ...prevTodos,
      {id:Math.random().toString(),text:text}
    ]);
    console.log(text);
  }
  return (<div className="App">
  <NewTodo onAddTodo={todoHandler}/>
  <TodoList items={todos}/>
  </div>);

};

export default App;
