import { Link } from 'react-router-dom';
import './style.css'

function CharacterListLink(){


    return(
        <Link className='link-to__character-list' to={'/characterlist'}>
        <p>To Character List</p>
        </Link>
    )
}

export default CharacterListLink;