// 1- Crear un componente con un input en el que metamos los grados Celsius
// 2- Modificar el componente anterior para que por props permita introducir la label del input y el value inicial
import './style.css'

export default function Temperature(props){
    
    return(
        <div className='temperature_container'>
            <label htmlFor={props.label}>{props.label}: </label>
            <input id={props.label} type="text" placeholder='introduce los grados'  onChange={props.onConverter} value={props.value}/>
        </div>
        
    )
}