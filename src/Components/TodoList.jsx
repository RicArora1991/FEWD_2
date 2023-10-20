import React, { useState } from 'react'

 function TodoList() {
    const[todos, setTodos]=useState([]);
    const[newTodo, setNewTodo]=useState();
    function addTodo(){
        console.log('hello');
        if(newTodo!==''){
            setTodos([...todos,newTodo]);
            setNewTodo('');
        }
    }
  return (
   <>
   <div className="todo_list">
    <h1>My Todo List</h1>
    <div>
        <input type="text" placeholder='Add a new TODO' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={()=>addTodo()}>Submit</button>

        {todos.map((todo,index)=>(
            <li> {todo}</li>
        ))}
    </div>
   </div>
   </>
  )
}

export default TodoList
