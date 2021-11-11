import React from 'react';

function Temperatura(props) {

    const handleOnChange = e => {

        props.calcular(e.target.value)
    }


    return (
        <div>


            <label> {props.label}</label>
            <input onChange={handleOnChange} value={props.value} className="input_temperature" type="number" />
        </div>
    )
}

export default Temperatura;