function ListPeople() {

    const [people, setPeople] = React.useState([]);

    React.useEffect(() => {
        
        for (let i = 1; i<=82; i++){
            fetch(`https://swapi.dev/api/people/${i}`)
                        .then(r => r.json())
                        .then(d => {
                            setPeople(oldValue => oldValue.concat(d))
                        })
        }
      
    }, [])
    return (
        <div className= 'container_list'>
            {people.map((e,i )=> <CharacterCard key={i} datos={e}></CharacterCard>)}
        </div>
    )
}
