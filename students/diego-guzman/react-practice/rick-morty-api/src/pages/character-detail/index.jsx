import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.css'


function CharacterDetailPage() {

    let { id } = useParams();
    let [data, setData] = useState({})
    let [episode, setEpisode] = useState([])

    useEffect(() => {
        let episodes = [];
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(r => r.json())
            .then(d => {
                setData(d)
                for (let i = 0; i <= d.episode.length; i++) {
                    fetch(d.episode[i])
                        .then(response => response.json())
                        .then(episode => {
                            episodes.push(episode)
                            if (d.episode.length-1=== i) {
                                setEpisode(episodes)
                            }
                        })
                }
            })

    }, [id])

    return (<React.Fragment>
        <div className='character__detailed__container'>
            <img className='character__image' src={data.image} alt="character"></img>
            <div className='text__container'>
                <h2>{data.name}</h2>
                <ul>
                    <li>{data.id}</li>
                    <li>{data.status}</li>
                    <li>{data.species}</li>
                    <li>{data.gender}</li>
                    {episode.map((e, i) => <li key={i} className='character__episodio'>{e.name}</li>)}
                </ul>
            </div>
        </div>

    </React.Fragment>

    )
}

export default CharacterDetailPage