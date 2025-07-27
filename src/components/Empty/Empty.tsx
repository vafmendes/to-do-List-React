import EmptyImage from "../../assets/empty.svg";
import './Empty.css';

interface EmptyProps{
    title?: string;
    show: boolean;
}

function Empty({title= "Nenhuma tarefa cadastrada", show}: EmptyProps){
    return(
        <>
        {show === true &&(
            <div className='empty-image'>
            <img src={EmptyImage} alt="empty"/>
            <h3>{title}</h3>
          </div>
        )}
        </>

 )
}

export default Empty