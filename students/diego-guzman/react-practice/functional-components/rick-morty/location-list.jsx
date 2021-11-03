function LocationList(props) {

    let [location, setLocation] = React.useState([])
    let [filtered, setFiltered] = React.useState([])

    React.useEffect(() => {
        const AllLocations = [];
        for (let i = 1; i <= 108; i++) {
            AllLocations.push(i);
        }
        fetch(`https://rickandmortyapi.com/api/location/${AllLocations}`)
            .then(r => r.json())
            .then(d => { setLocation(d); setFiltered(d); const filteredByName = d.filter(c => c.name.toLowerCase().includes(props.data));
                setFiltered(filteredByName)})
        
    }, [])



    return (<React.Fragment>
        <div className='location__container'>
        {filtered.map((e, i) => <LocationCard key={i} data={e}></LocationCard>)}
        </div>

    </React.Fragment>
    )

}