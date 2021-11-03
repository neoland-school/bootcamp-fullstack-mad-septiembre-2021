
function CharacterList() {

    let [dataValue, setData] = React.useState([]);

    React.useEffect(() => {
        const AllCharacters = [];
        for (let i = 1; i < 82; i++) {
            fetch(`https://swapi.dev/api/people/${i}`)
                .then(r => r.json())
                .then(d => {
                    AllCharacters.push(d);
                    setData(dataValue.concat(AllCharacters))
                })
        }
    }, [])


    return (
        <React.Fragment>
            {dataValue.map(i => <CharacterCard data={i}></CharacterCard>)}
        </React.Fragment>
    )
}