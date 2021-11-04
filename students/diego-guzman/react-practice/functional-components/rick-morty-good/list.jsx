function List() {


    let [data, setData]= React.useState([])
    let [filteredData, setFilteredData]= React.useState([])
    let [location, setLocation]= React.useState([])
    let [filteredLocation, setFilteredLocation]= React.useState([])


    React.useEffect(() => {
        const AllCharacters = [];
        for (let i = 0; i < 672; i++) {
            AllCharacters.push(i);
        }
        fetch(`https://rickandmortyapi.com/api/character/${AllCharacters}`)
            .then(r => r.json())
            .then(d => { setData(d); setFilteredData(d) }) //Igualo las dos variables 

        const AllLocations = [];
        for (let i = 1; i <= 108; i++) {
            AllLocations.push(i);
        }
        fetch(`https://rickandmortyapi.com/api/location/${AllLocations}`)
            .then(r => r.json())
            .then(d => {
                setLocation(d); setFilteredLocation(d); 
            })

    }, [])


    function changeHandler(e) {
        const info = e.target.value.toLowerCase();
        const filteredByName = dataValue.filter(c => c.name.toLowerCase().includes(info));
        setFiltered(filteredByName)
    }

    function submitHandler(e) {
        setSearch(true)
        e.preventDefault();
        const searchedLocation = e.target.submit.value.toLowerCase()
        setLocation(searchedLocation)


    }

    return (

    )

}




