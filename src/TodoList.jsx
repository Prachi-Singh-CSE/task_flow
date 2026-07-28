import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";


export default function TodoList(){
    let [todos , setTodos] = useState([{task : "sample-task", id: uuidv4() , isComplete:false  }]);
    let [newTodo, setNewTodo] = useState("");
    
    

    let addNewTask = ()=>{
       setTodos((prevTodos)=>{
            return [...prevTodos, { task : newTodo , id : uuidv4() , isComplete: false}]
    });
       setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTask=(id)=>{
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id));
        
    };

    // let upperCaseAll = ()=>{
    //     setTodos(
    //        todos.map((todo)=>{
    //             return {
    //                 ...todo,
    //                 task : todo.task.toUpperCase(),
    //             };
            
    //     })
    // );
    // };

    // let UpperCaseOne = (id)=>{
    //     setTodos(
    //        todos.map((todo)=>{
    //         if(todo.id == id){
    //             return {
    //                 ...todo,
    //                 task : todo.task.toUpperCase(),
    //             };
    //         }
    //         else{
    //             return todo;
    //         }
            
    //     })
    // );
       
    // };


    let MarkAsDoneAll = ()=>{
        setTodos(
           todos.map((todo)=>{
                return {
                    ...todo,
                    isComplete : true,
                };
            
        })
    );
    };

    let MarkAsDoneOne=(id)=>{
        setTodos(
           todos.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo,
                    isComplete: true,
                };
            }
            else{
                return todo;
            }
            
        })
      );
    };

    let remaining = todos.filter((todo)=> !todo.isComplete).length;


    return (
    //     <div >
    //          <input type="text" 
    //          placeholder="add a task"
    //          value = {newTodo}
    //          onChange={updateTodoValue}/>
    //           &nbsp;&nbsp; &nbsp;&nbsp;
    //          <button onClick={addNewTask}>+</button>
    //             <br />
    //             <br />
               
    //          <h4 >
    //             To-do List
    //          </h4>
    //          <ul>
    //             {todos.map((todo)=>(
    //                 <li  key = {todo.id}>
    //                  <span style = {todo.isComplete ? {textDecorationLine : "line-through"}:{}}>
    //                     {todo.task}
    //                 </span>   
    //                 &nbsp;&nbsp; &nbsp;&nbsp;
    //                 <button  onClick={ ()=>deleteTask(todo.id)}>delete</button>
    //                  &nbsp;&nbsp; &nbsp;&nbsp;
    //                 {/* <button  onClick={ ()=>UpperCaseOne(todo.id)}>UpperCase One</button> */}
    //                  &nbsp;&nbsp; &nbsp;&nbsp;
    //                  <button onClick={ ()=> MarkAsDoneOne(todo.id) }>Done  </button>
    //                 </li>
                    
    //             )
    //         )}
    //          </ul>
    //         <br />

    //        <button  onClick={MarkAsDoneAll}>Done All</button>
    //        &nbsp;&nbsp;
    //         {/* <button  onClick={upperCaseAll}>Uppercase       All</button> */}
    //      </div>
    // )


    ///------------------------------------------------------------------
  
    <div className="todo-page">
      <div className="glow glow-top" />
      <div className="glow glow-bottom" />
 
      <div className="todo-card">
        <div className="todo-header">
          <h1 className="todo-title">To-do List</h1>
          <span className="todo-count">{remaining} left</span>
        </div>
 
        <div className="todo-add-row">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={updateTodoValue}
            onKeyDown={(e) => e.key === "Enter" && addNewTask()}
            className="todo-input"
          />
          <button onClick={addNewTask} className="todo-add-btn">+</button>
        </div>
 
        <ul className="todo-list">
          {todos.length === 0 && (
            <li className="todo-empty">All clear. Add your first task ✨</li>
          )}
 
          {todos.map((todo, i) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-index">{String(i + 1).padStart(2, "0")}</span>
 
              <button
                onClick={() => MarkAsDoneOne(todo.id)}
                className={`todo-checkbox ${todo.isComplete ? "checked" : ""}`}
              >
                {todo.isComplete && <span className="todo-check-mark">✓</span>}
              </button>
 
              <span className={`todo-text ${todo.isComplete ? "done" : ""}`}>
                {todo.task}
              </span>
 
              <button onClick={() => deleteTask(todo.id)} className="todo-delete-btn">
                ✕
              </button>
            </li>
          ))}
        </ul>
 
        {todos.length > 0 && (
          <button onClick={MarkAsDoneAll} className="todo-done-all-btn">
            ✓ Mark all done
          </button>
        )}
      </div>
    </div>
  );

}