function CharacterList() {

    let [dataValue, setData] = React.useState([])
    let [filteredData, setFiltered] = React.useState([])
    let [location, setLocation] = React.useState('')
    let [filteredLocation, setFilteredLocation] = React.useState([])
    let [searched, setSearch] = React.useState(false)//condition for the ternay operator

    React.useEffect(() => {
        const AllCharacters = [];
        for (let i = 0; i < 672; i++) {
            AllCharacters.push(i);
        }
        fetch(`https://rickandmortyapi.com/api/character/${AllCharacters}`)
            .then(r => r.json())
            .then(d => { setData(d); setFiltered(d) }) //Igualo las dos variables 

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

    


    return (<main className='main__container' >
        <input className='search__input' placeholder='Find your character' onChange={changeHandler}></input>
        <form onSubmit={submitHandler}>
            <input name='submit' placeholder='Find what you want to know about a place'></input>
            <button className='submit__button' type='submit'>Find</button>
        </form>
        {searched === true ? <LocationList data={location}></LocationList>
            : <div className='all-characters__container'>
                {filteredData.map((e, i) => <CharacterCard key={i} data={e}></CharacterCard>)}
            </div>}


    </main>
    )

}




