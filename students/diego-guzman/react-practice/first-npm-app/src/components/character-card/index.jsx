
import './style.css';

function CharacterCard(props) {

    return (
        <div className = 'character__card'>
            <p>{props.data.name}</p>
        </div>
    )
}

export default CharacterCard;