
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CharacterListLink from '../go-to-character-list-link';
import './style.css'

function CharacterDetail() {

    const { id } = useParams();
    let [character, setCharacter] = useState({});
    let [film, setFilm] = useState([])
    

    useEffect(() => {
        const arr = [];
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(r => r.json())
            .then(d => {
                setCharacter(d);
                for (let i = 0; i <= d.films.length; i++) {
                    fetch(d.films[i])
                        .then(response => response.json())
                        .then(films => {
                            arr.push(films)
                            if (i === d.films.length-1) {
                                setFilm(arr)
                            }
                        })

                }
            })

    }, [id])

    return (
        <React.Fragment>
            <div className='character__detail'>
                <h2 className= 'character__name'>{character.name}</h2>
                <p> Height:{character.height}</p>
                <p> Body Mass: {character.mass}</p>
                <p> Eye color: {character.eye_color}</p>
                <p>Year of Birth: {character.birth_year}</p>
                {film.map((e, i) => <p key={i}> Films: {e.title}</p>)}
            </div>
            <CharacterListLink></CharacterListLink>
        </React.Fragment>
    )
}

export default CharacterDetail;