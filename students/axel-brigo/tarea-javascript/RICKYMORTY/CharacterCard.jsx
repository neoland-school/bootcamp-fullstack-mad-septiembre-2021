function CharacterCard(props) {


    return (
        <div>
            <p>El nombre es: {props.name}</p>
            <p>Se encuentra: {props.state}</p>
            <p>Su ultima ubicacion conocida: {props.location}</p>
            <p>Aparece en el episodio numero: {props.episode}</p>
        </div>
    )


}