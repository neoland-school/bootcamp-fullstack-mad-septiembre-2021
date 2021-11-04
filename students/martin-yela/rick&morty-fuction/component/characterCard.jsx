// 1.- Crear un componente de función "CharacterCard" que mostrará
// nombre
// estado (vivo o muerto)
// Ultima localización conocida
// Nombre del primer episodio en que aparece.

function CharacterCard(props) {

    const [episode, setEpisode] = React.useState('');

    React.useEffect(()=> {
        fetch(props.datos.episode[0])
        .then(r => r.json())
        .then(d=> setEpisode(d));
        
    },[])

    return (
        <div className='card'>
            {/* <img src={props.datos.image} className='img'/> */}
            <p> {props.datos.name}</p>
            <p> {props.datos.status}</p>
            <p>{props.datos.location.name}</p>
            <p>{episode.name}</p>
            <p>{props.datos.origin.name}</p>
        </div>
    )
}