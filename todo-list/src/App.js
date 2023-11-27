import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';

function App() {
   const onDelete=(todo)=>{
    console.log("delted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
   }
   const addTodo=(title,desc)=>{
    console.log("added",title,desc)
    let sno;
    if(sno.length==0)
    {
      sno=0;
    }
    else{
    sno=todos[todos.length-1].sno+1;
  }
    const mytodos={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodos]);
    console.log(mytodos);

   }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"go to market",
      desc:"to buy foods"
    },
    {
      sno:2,
      title:"go to mall",
      desc:"to buy cloths"
    },
    {
      sno:3,
      title:"go to shop",
      desc:"to buy chips"
    }

  ])
  return (
    <div>
      <Header title="My Todo List" search={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
