import type { TaskType } from '../../types/TaskType';
import "./Task.css";


interface TaskProps{
    task: TaskType;
    handleTaskToggle: (id: string) => void;
}

function Task({task, handleTaskToggle}: TaskProps){
 return(
    <li className={`task-item ${task.status ?"task-item_status":""}`}> 
        <input type="checkbox" checked={task.status} onChange={()=>handleTaskToggle(task.id)}/> {task.title}
    </li>
 )
}

export default Task