import { useState } from 'react';
import './App.css';
import { type TaskType } from './types/TaskType';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts';
import Empty from './components/Empty/Empty';
import Task from './components/Task/Task';
import Filters from './components/Filters/Filters';
import type { FilterType } from './types/FilterType';
import GlobalContextProvider, { useGlobalContext } from './context/GlobalContext';


export default function AppPage(){
  return(
    <GlobalContextProvider>
      <App/>
    </GlobalContextProvider>

  )
}


function App() {
const {title} = useGlobalContext();

const[input, setInput] = useState("");
const[filter, setFilter] = useState<FilterType>("all");
const [tasks, setTask] = useLocalStorage<TaskType[]>("task-lists",[]);

function handleSetTasks(newTasks: TaskType[]){
  setTask(newTasks);
}

function handleSetFilter(newFilters: FilterType){
  setFilter(newFilters);
}


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
        <h1>{title}</h1>
        <input type="text" placeholder="Criar uma nova tarefa" 
            value={input} 
            onChange={(event)=> setInput(event.target.value)} onKeyDown={handleKeyDown} />
      </div>
          <ul className='content-tasks'>
            <div>
                {filteredTasks().map((t)=>(
                  <Task task={t} handleTaskToggle={handleTaskToggle}/>
              ))}
              <Empty title='Nenhuma informação cadastrada' show={filteredTasks().length === 0}/>
            </div>
            
           <Filters handleSetTasks={handleSetTasks} handleSetFilter={handleSetFilter} tasks={tasks} />

          </ul>
     </div>
   
  )
}

