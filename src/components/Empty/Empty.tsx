import EmptyImage from "../../assets/empty.svg";
import './Empty.css';

function Empty(){
    return(
        <div className='empty-image'>
            <img src={EmptyImage} alt="empty"/>
            <h3>Sem informações cadastradas</h3>
        </div>

 )
}

export default Empty