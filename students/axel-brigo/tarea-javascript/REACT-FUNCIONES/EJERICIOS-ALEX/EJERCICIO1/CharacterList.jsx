function CharacterList() {


    let [people, setPeople] = React.useState('axel');

    React.useEffect(() => {

        fetch('https://swapi.dev/api/people/27/')
            .then(response => response.json())
            .then(data => {
                setPeople(data)
                console.log('asd' + people)

            });
    }, []);





    return (
        <React.Fragment>
            <CharacterCard name={'data'}></CharacterCard>
            <p>cualquier cosa</p>
        </React.Fragment>
    )

}