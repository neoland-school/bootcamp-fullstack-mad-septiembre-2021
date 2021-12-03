import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card/character-card";
import './style.css'

function generateCountArray(count){
    const arrCharacters = [];
                for (let i = 1; i <= count; i++) {
                    arrCharacters.push(i)
                }
    return arrCharacters;
}

async function getLocations(){
    let r = await fetch('https://rickandmortyapi.com/api/location');
    const d = await r.json();
    r= await fetch(`https://rickandmortyapi.com/api/location/${generateCountArray(d.info.count)}`)
    return await r.json();
}

async function getCharacters(){
    let r = await fetch('https://rickandmortyapi.com/api/character');
    const d = await r.json();
    r= await fetch(`https://rickandmortyapi.com/api/character/${generateCountArray(d.info.count)}`)
     return await r.json();
}

function CharacterList() {


    let currentCharacterSearch = ''; //pasar a state
    let currentLocationSearch = ''; //pasar a state
    let [filtered, setFiltered] = useState([])
    let originalCharacterList = []; //pasar a state

    function filteredInputs() {

        let filteredCharacters = originalCharacterList.filter(c => {
            c.name.toLowerCase().includes(currentCharacterSearch)
                && c.location.name.toLowerCase().includes(currentLocationSearch)
        })
        setFiltered(filteredCharacters)
    }

    function handleChange(e) {
        currentCharacterSearch = e.target.value.toLowerCase();
        filteredInputs();

    }

    function handleSubmit(e) {
        e.preventDefault();
        currentLocationSearch = e.target.locationInput.value;
        filteredInputs();
    }


    //Estas funciones son los dos filtros 


    // function handleChange(e) {
    //     const info = e.target.value.toLowerCase();
    //     const filteredByName = character.filter(c => c.name.toLowerCase().includes(info))
    //     setFiltered(filteredByName);

    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const infoLocation = e.target.locationInput.value;
    //     console.log(infoLocation)
    //     const filteredByLocation = character.filter(c => c.location.name.toLowerCase().includes(infoLocation))
    //     setFiltered(filteredByLocation);
    // }

    useEffect(() => {
        getCharacters().then(cs => {
            getLocations().then(l => {
                let character = cs.map((c,i) =>  ({...c, location: l[i]}));
                setFiltered(character);
                originalCharacterList = character;
            }); 
        });             
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