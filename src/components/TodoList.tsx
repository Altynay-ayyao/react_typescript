import React from "react";
interface TodoListProps {
  items:{id:string; text:string}[];
}

const TodoList:React.FC<TodoListProps>=(props)=>{
  
  //const todos = [{id:'t1',text:'walk 10km'}]
  return <ul>
    {props.items.map(todo=>(<li key={todo.id}>{todo.text}</li>))}
  </ul>
}
export default TodoList;