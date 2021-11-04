function LocationList(props) {

    // let [location, setLocation] = React.useState([])
    let [filteredLocation, setFilteredLocation] = React.useState([])

    React.useEffect(() => {
        const AllLocations = [];
        for (let i = 1; i <= 108; i++) {
            AllLocations.push(i);
        }
        fetch(`https://rickandmortyapi.com/api/location/${AllLocations}`)
            .then(r => r.json())
            .then(d => {
                 setFilteredLocation(d); const filteredByName = d.filter(c => c.name.toLowerCase().includes(props.data));
                setFilteredLocation(filteredByName)
            })

    }, [])



    return (<React.Fragment>
        {filteredLocation.length !== 0 ?
            <div className='location__container'>
                {filteredLocation.map((e, i) => <LocationCard key={i} data={e}></LocationCard>)}
            </div>
            : <div className='try-again'>PLEASE TRY AGAIN</div>}


    </React.Fragment>
    )

}