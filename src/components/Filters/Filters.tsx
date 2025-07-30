import "./Filters.css";
import type { TaskType } from '../../types/TaskType';
import type { FilterType } from '../../types/FilterType';

interface FilterProps{
    tasks: TaskType[];
    handleSetTasks: (tasks: TaskType[]) => void;
    handleSetFilter: (filter: FilterType) => void;
}


function Filters({tasks, handleSetTasks, handleSetFilter}: FilterProps){

function handleUncheckAllCompletedtasks(){
    const filteredTasks = tasks.map((task)=>(
        task.status ? {...task, status: false }: task));
    
    handleSetTasks(filteredTasks);
};


 return(
     <li className='content-actions'>
        <div>
        <a href="#">{tasks.length} tarefas</a>
        </div>
        <div>
            <a onClick={()=> handleSetFilter("all")}>Todas</a>
            <a onClick={()=> handleSetFilter("pending")}>Ativas</a>
            <a onClick={()=> handleSetFilter("done")}>Completadas</a>
        </div>
        <div>
            <a href="#" onClick={handleUncheckAllCompletedtasks}>Limpar Completadas</a>
        </div>
    </li>

 )
}

export default Filters

