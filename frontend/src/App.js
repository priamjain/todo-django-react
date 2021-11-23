import './App.css';
import Task from './components/Task'
import {useEffect, useState} from 'react'
import { TodoApi } from './services/todoApi';

function App() {
  const [list,setList] = useState([]);
  const [input, setInput] = useState("")
  const [update, setUpdate] = useState(true)
  const [close, setClose] = useState(false)

  const deleteTask = (id) =>{
      TodoApi.deleteTodo(id).then(()=>{
        setUpdate(true)
      })
  }
  const addTask = (e) =>{ 
    if(e.keyCode===13){
      TodoApi.postTodo(input).then(()=>{
        setUpdate(true)
      setInput("");
      })
      
    }
  }

  useEffect(() => {
    if(update){
    TodoApi.getTodos().then(res=>setList(res.data))
    }
    setUpdate(false)
  }, [update])
  
  return (
    <div id="container">

    <h1>To-Do List<i onClick={(e)=>{setClose(!close)}} className={`fas fa-plus ${close?null:"rotate"}`}></i></h1>

    <input type="text" className={close?"hide":null}onKeyDown={addTask} onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Add New ToDo"/>

    <ul>
      {
        list.slice(0).reverse().map(task=>{
          return(<Task key={task.id} id={task.id} text={task.title} deleteTask={deleteTask} />)
        })
      }
    </ul>
  </div>
  );
}

export default App;
