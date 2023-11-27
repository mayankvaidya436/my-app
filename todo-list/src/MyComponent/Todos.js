import React from "react";
import TodoItem from "./TodoItem";
function Todos(props){
    return (<div className=" container">
        <h3 className="text-center">Todos List</h3>
        {props.todos.length===0?<p>no todo display</p>:
        props.todos.map((todo)=>{
            return  ( <div>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
            </div>
            )
        })}
    </div>)

}
export default Todos;