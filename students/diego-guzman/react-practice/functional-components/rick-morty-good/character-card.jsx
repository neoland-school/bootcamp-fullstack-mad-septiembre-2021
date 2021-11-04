function CharacterCard(props) {

    let [url, setUrl] = React.useState('')
    React.useEffect(() => {
        const a = props.data.episode[0];
        fetch(a)
            .then(r => r.json())
            .then(d => setUrl(d))

    }, [])

    return (
        <React.Fragment>
            <div className='character__container'>
                    <img src={props.data.image} className='character__img'></img>
                    <div className='character__text__container'>
                        <h2 className='character__name'>{props.data.name}</h2>
                        <ul>
                            <li className={`character__status ` + props.data.status} >{props.data.status}</li>
                            <li className='character__origin-location'> Origin location: {props.data.origin.name}</li>
                            <li className='character__current-location'> Current location: {props.data.location.name}</li>
                            <li className='character__location__tittle'>Last known location:</li>
                            <li className='character__location'>{props.data.location.name}</li>
                            <li className='character__episodio__tittle'>First seen in:</li>
                            <li className='character__episodio'><Episode data={url}></Episode></li>
                        </ul>
                    </div>
                </div>
        </React.Fragment>
    )

}