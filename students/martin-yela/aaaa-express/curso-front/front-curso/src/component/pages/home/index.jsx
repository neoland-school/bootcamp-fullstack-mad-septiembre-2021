import React, { useEffect, useState } from "react";
import Card from "../../card";
import './style.css'


export default function Home() {
    const [cursos, setCursos] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/mostrarCurso')
        .then(r => r.json())
        .then(d => setCursos(d))
    },[]) 
        
    return (
        <div className='containerCards'>
            {cursos.map((e, i) => <Card key={i} obj={e}></Card> )}
        </div>
        
    )
}