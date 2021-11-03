function CharacterCard(props) {

    return (
        <div className='character__container'>
            <h2 className='character__name'>{props.data.name}</h2>
            <p>{props.data.eye_color}</p>
            <p>{props.data.birth_year}</p>
            <p>{props.data.gender}</p>
        </div>
    )
}