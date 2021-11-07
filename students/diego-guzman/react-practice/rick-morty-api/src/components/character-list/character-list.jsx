import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card/character-card";
import './style.css'

function CharacterList() {

    
    // let currentCharacterSearch = '';
    // let currentLocationSearch = '';
    let [character, setCharacter] = useState([])
    let [filtered, setFiltered] = useState([])
    let [location, setLocation] = useState([])
    // let originalCharacterList = [];

    // function filteredInputs() {

    //     let filteredCharacters = originalCharacterList.filter(c => {
    //         c.name.toLowerCase().includes(currentCharacterSearch)
    //             && c.location.name.toLowerCase().includes(currentLocationSearch)
    //     })
    //     console.log(filteredCharacters)
    //     setFiltered(filteredCharacters)
    // }

    // function handleChange(e) {
    //     currentCharacterSearch = e.target.value.toLowerCase();
    //     filteredInputs();

    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     currentLocationSearch = e.target.locationInput.value;
    //     filteredInputs();
    // }


    function handleChange(e) {
        const info = e.target.value.toLowerCase();
        const filteredByName = character.filter(c => c.name.toLowerCase().includes(info))
        setFiltered(filteredByName);

    }

    function handleSubmit(e){
        e.preventDefault();
        const infoLocation = e.target.locationInput.value;
        console.log(infoLocation)
        const filteredByLocation = character.filter(c => c.location.name.toLowerCase().includes(infoLocation))
        setFiltered(filteredByLocation);
    }

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => r.json())
            .then(d => {
                let arrCharacters = [];
                let characterNumber = d.info.count;
                for (let i = 1; i <= characterNumber; i++) {
                    arrCharacters.push(i)
                }
                fetch(`https://rickandmortyapi.com/api/character/${arrCharacters}`)
                    .then(response => response.json())
                    .then(character => {
                        setCharacter(character); setFiltered(character); /*originalCharacterList=character*/;
                        
                        fetch('https://rickandmortyapi.com/api/location')
                            .then(r => r.json())
                            .then(d => {
                                let arrLocations = [];
                                let locationNumber = d.info.count;
                                for (let i = 1; i <= locationNumber; i++) {
                                    arrLocations.push(i)
                                }
                                fetch(`https://rickandmortyapi.com/api/location/${arrLocations}`)
                                    .then(response => response.json())
                                    .then(location => setLocation(location))
                            })
                    })
            })
    }, [])




    return (<React.Fragment>
        <input placeholder='find a character' className='search__input' type='text' name='searchInput' onChange={handleChange}></input>
        <form onSubmit={handleSubmit}>
            <input placeholder='find a location' className='location__input' type='text' name='locationInput'></input>
            <button type='submit'>Search</button>
        </form>
        <div className='characters__container'>
            {filtered.map(c => <CharacterCard data={c} key={c.id} ></CharacterCard>)}
        </div>
    </React.Fragment>

    )
}

export default CharacterList;