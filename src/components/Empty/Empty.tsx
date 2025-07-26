import EmptyImage from "../../assets/empty.svg";

function Empty(){
    return(
        <div className='empty-image'>
            <img src={EmptyImage} alt="empty"/>
            <h3>Sem informações cadastradas</h3>
        </div>

 )
}

export default Empty;