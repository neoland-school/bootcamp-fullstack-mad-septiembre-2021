import './style.css'
import React from 'react';
import { useParams, BrowserRouter } from 'react-router-dom';




function Character() {

    const { id } = useParams();



    return (

        <BrowserRouter>
            <p>{id}</p>
        </BrowserRouter>


    )


};

export default Character;