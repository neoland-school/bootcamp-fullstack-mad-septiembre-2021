// 1.- Crear un componente de función CharacterCard que reciba por props el nombre, color de ojos ,  año de nacimiento y género. Dar un estilo de card y mostrar todos los personajes del API en el navegador.
function CharacterCard(props){
        return (
            <div className='div__container'>
                <h2>Nombre: {props.datos.name}</h2>
                <p>Color de ojos: {props.datos.eye_color}</p>
                <p>Año de nacimiento: {props.datos.birth_year}</p>
                <p>Género: {props.datos.gender}</p>
            </div>
        )
}