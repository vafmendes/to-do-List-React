import { useState } from 'react';
import './App.css';
import { type TaskType } from './types/TaskType';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts';
import Empty from './components/Empty/Empty';

function App() {

const[input, setInput] = useState("");
const[filter, setFilter] = useState<"all"|"done"|"pending">("all");
const [tasks, setTask] = useLocalStorage<TaskType[]>("task-lists",[]);


function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
  if(input.length && event.key === "Enter"){
      setTask([...tasks, {id: uuidv4(), title: input, status: false}]);
      setInput("");
  }

}

function handleTaskToggle(id: string){
  setTask((prevState)=> prevState.map((task)=> task.id === id ? {...task, status: !task.status}: task))
}

function filteredTasks(){
 switch (filter){
  case "all":
      return tasks;
  
  case "done":
      return tasks.filter((task)=> task.status);
  
  case "pending":
      return tasks.filter((task)=> !task.status);
  default:
      return tasks;
} 

}

  return (
    <div className="container-app">
      <div className="container-header">
        <div className="container-mask"/>
        <h1>Lista de tarefas</h1>
        <input type="text" placeholder="Criar uma nova tarefa" 
            value={input} 
            onChange={(event)=> setInput(event.target.value)} onKeyDown={handleKeyDown} />
      </div>
          <ul className='content-tasks'>
            <div>
                {filteredTasks().map((t)=>(
                  <li className={`task-item ${t.status ?"task-item_status":""}`} key={t.id}> 
                    <input type="checkbox" checked={t.status} onChange={()=>handleTaskToggle(t.id)}/> {t.title}
                </li>
              ))}

                {filteredTasks().length === 0 && (<Empty/>)}
            </div>
            
            <li className='content-actions'>
              <div>
                <a href="#">{tasks.length} tarefas</a>
              </div>
              <div>
                  <a onClick={()=> setFilter("all")}>Todas</a>
                  <a onClick={()=> setFilter("pending")}>Ativas</a>
                  <a onClick={()=> setFilter("done")}>Completadas</a>
                </div>
              <div>
                  <a href="#">Limpar Completadas</a>
              </div>
            </li>
          </ul>
     </div>
   
  )
}

export default App
