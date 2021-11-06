import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card/character-card";
import './style.css'

function CharacterList() {

    let [character, setCharacter] = useState([])
    let [filtered, setFiltered] = useState([])

    function handleChange(e) {
        const info = e.target.value.toLowerCase();
        const filteredByName = character.filter(c => c.name.toLowerCase().includes(info))
        setFiltered(filteredByName);

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
                    .then(character => {setCharacter(character); setFiltered(character)})
            })
    }, [])

    return (<React.Fragment>
        <form>
            <input placeholder='find a character' className='search__input' type='text' name='searchInput' onChange={handleChange}></input>
        </form>
        <div className='characters__container'>
            {filtered.map(c => <CharacterCard data={c} key={c.id} ></CharacterCard>)}
        </div>
    </React.Fragment>

    )
}

export default CharacterList;