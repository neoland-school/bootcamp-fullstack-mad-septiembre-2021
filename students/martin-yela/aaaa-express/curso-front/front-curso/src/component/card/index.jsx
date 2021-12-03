import './style.css';

export default function Card(props) {
    console.log(props.obj)
    return (
        <div className='card'>
            <h1>Nombre: {props.obj.nombre}</h1>
            <p>Escuela: {props.obj.escuela}</p>
            <p>Profesor: {props.obj.profesores.nombre}, mail: {props.obj.profesores.email}</p>
            <p>Fecha de inicio: {props.obj.fechaDeInicio}</p>
            <p>Fecha de fin: {props.obj.fechaFin}</p>
        </div>
    )
}
