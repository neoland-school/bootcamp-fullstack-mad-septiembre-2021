import React, { useState } from 'react';
import './style.css';
import Temperatura from '../Temperatura/Temperatura';


function Calculadora(props) {


    const toFarenheit = 'Ingresa los Farenheit';
    const toCelcius = 'Ingresa los Celcius';

    const [celcius, updateCelcius] = useState(0);
    const [farenheit, updateFarenheit] = useState(32);



    const changeCelcius = num => {
        updateFarenheit(num)
        let prueba = num * 9 / 5 + 32;
        updateCelcius(prueba);


    }


    const changeFarenheit = num => {
        updateCelcius(num)
        updateFarenheit((num - 32) / 1, 8);
    }


    return (
        <div>
            <Temperatura calcular={changeCelcius} label={toCelcius} value={farenheit} ></Temperatura>

            <Temperatura calcular={changeFarenheit} label={toFarenheit} value={celcius} ></Temperatura>

            <Temperatura calcular={changeKelvin} label={toFarenheit} value={celcius} ></Temperatura>


        </div>

    )
}


export default Calculadora;