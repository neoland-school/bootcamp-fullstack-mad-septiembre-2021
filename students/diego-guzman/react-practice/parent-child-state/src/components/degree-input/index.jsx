import React from "react";

function DegreeInput(props) {



    return (
        <React.Fragment>
            <label>{props.label}</label>
            <input onChange={props.onConvert} type='number' placeholder={`enter ${props.name} degrees`} value={props.value}></input>
        </React.Fragment>
    )
}

export default DegreeInput