import React, { useState } from "react"
import DegreeInput from "../degree-input"

function Calculator() {

const [Celsius, setCelsius] = useState(0);
const [Farenheit, setFarenheit] = useState(32);

 const onCelciusToFarenheit = e=>{
    setCelsius(e.target.value)
    setFarenheit((e.target.value*1.8)+32)
}

const onFarenheitToCelsius = e=>{
    setCelsius((e.target.value-32)*5/9)
    setFarenheit(e.target.value)
    
}


    return (
        <React.Fragment>
            <DegreeInput onConvert={onCelciusToFarenheit} name='celsius' label='celsiusDegrees' value={Celsius} degrees={20}></DegreeInput>
            <DegreeInput onConvert={onFarenheitToCelsius} name='farenheit' label='FarenheitDegrees' value={Farenheit}></DegreeInput>
        </React.Fragment>
    )
}

export default Calculator


