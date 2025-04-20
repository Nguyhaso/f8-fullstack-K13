import { useState } from 'react'
import './App.css'

function App() {
    const[list, setList] = useState([])
    const[todo, setTodo] = useState('')

    const addTask =() =>{
        if(todo === "") return
        const newList = [...list]
        newList.push(todo)
        setList(newList)
        console.log(list)
        setTodo('')
    }

    const setTask = (e)=>{
        setTodo(e.target.value)
        console.log(e.target.value)
    }
    const deleteTask =(index)=>{
        const newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }

  return (
      <div className="container">
        <h1>To-Do List</h1>
          <input type={"text"} value={todo} placeholder={"What is your task?"} onChange={setTask}/>
          <button onClick={addTask}>Add</button>
        <ul>
            {list.map((task,index) =>(
                <li key={index}>
                    {task}
                    <button onClick={() =>{deleteTask(index)}}>Delete</button></li>
            ))}
        </ul>
      </div>
  );
}

export default App;
