function CharacterList() {



    const [info, setInfo] = React.useState('');
    let arr = []
    for (let i = 0; i < 83; index++) {
        arr.push(i);

    }

    React.useEffect(() => {



        fetch(`https://rickandmortyapi.com/api/character${i}`)
            .then(response => response.json())
            .then(data => setInfo(data));
    }, []);



    return (
        <CharacterCard data={arr}></CharacterCard>
    )
}