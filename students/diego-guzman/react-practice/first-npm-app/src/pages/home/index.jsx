import React from "react";
import { Link } from 'react-router-dom';
import './style.css'
// import force from '../../img/force-bg.jpeg'

function Home(){


    return(<React.Fragment> 
        <div className='main__container'>
            {/* <img alt='force' src={force} className='force__img'></img> */}
            <Link to={'/characterlist'}><p className='force__access'>Accede al lado de la fuerza</p></Link>
        </div>
        
    </React.Fragment>
        
    )
}
export default Home