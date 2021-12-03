function LocationCard(props) {

    return (

        <div className='location'>
            <h2 className='location__name'>{props.data.name}</h2>
            <ul>
                <li className='character__location'>{props.data.id}</li>
                <li className='character__episodio__tittle'>{props.data.type}</li>
                <li className='character__episodio__tittle'>{props.data.dimension}</li>
                <li className='character__episodio__tittle'>{props.data.created}</li>
            </ul>
        </div>
    )

}