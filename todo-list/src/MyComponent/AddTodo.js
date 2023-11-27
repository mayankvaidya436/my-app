import React,{useState} from "react";
 function AddTodo({addTodo}){
    const [title,settitle]=useState('');
    const [desc,setdesc]=useState('');
  const submit=(e)=>{
    e.preventDefault();
    if(!title||!desc)
    {
        alert("plzz enter filed");
    }
   addTodo(title,desc);
  }

  return (
    <div className=" container my-3">
        <h1>Add Todo</h1>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label  className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}
export default AddTodo;