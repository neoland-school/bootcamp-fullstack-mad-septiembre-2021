
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import CharacterCard from '../../components/character-card'
import './style.css'


function CharacterList() {
    let [character, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(r => r.json())
            .then(d => {
                for (let i = 1; i <= d.count; i++) {
                    if (i===17)
                        continue;
                    fetch(`https://swapi.dev/api/people/${i}`)
                        .then(r => r.json())
                        .then(p => setCharacters(oldValue => oldValue.concat([{ ...p, id: i }])))
                }
            });
    }, [])


    return (<React.Fragment>
        <div className='all-characters__container'>
            {character.map(e => <Link key={e.id} to={`/character/${e.id}`} className='link'>
            <CharacterCard data={e}></CharacterCard>
              </Link>)}
        </div>
    </React.Fragment>
    )
}

export default CharacterList;