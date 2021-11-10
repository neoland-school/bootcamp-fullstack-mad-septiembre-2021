function CharacterCard(props) {

    const [myValue, setMyValue] = React.useState('axel');

    console.log(myValue);
    setMyValue('martina');

    return (
        <div>
            <p>Hello , {props.name}</p>
        </div>
    )
}

