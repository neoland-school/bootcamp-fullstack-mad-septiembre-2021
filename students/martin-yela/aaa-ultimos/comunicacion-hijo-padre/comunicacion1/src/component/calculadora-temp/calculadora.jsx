// 3- Crear un componente calculadora de temperatura que tenga dos componentes del paso dos. Uno para celsius y otro para farenheit
// 4- Crear en el componente dos funciones, uno que pase de celsius a farenhait y otro de farenhait a celsius
// 5- Actualizar los componentes para que lo que si el usuario escribe en el input de celsius se actualizce su valor en el de farenhait y al revés según escribe el usuario
import { Fragment, useState } from "react"
import Temperature from "../temperatura"
import './style.css'


export default function CalculadoraTemp() {

    const [valueF, setValueF] = useState();
    const [valueC, setValueC] = useState();
    


    const toCelsius = (e)=>{
        if (isNaN(e.target.value)){
            setValueC('Me has bloqueado Pelotudo')
            setValueF('refresca la página y pon un número')
        }else {
            setValueC((e.target.value-32) * 5/9 )
            setValueF(e.target.value)
        }
        
    
    }

    const toFarenheit = (e)=>{
        if (isNaN(e.target.value)){
            setValueC('Me has bloqueado Pelotudo')
            setValueF('refresca la página y pon un número')
        }else {
            setValueF(e.target.value * 1.8 + 32);
            setValueC(e.target.value)
        }
        
    }
    

    return(
        <div className='input_container'>
            <Temperature label='celsius' onConverter= {toFarenheit} value={valueC}></Temperature>
            <Temperature label='farenheit' onConverter= {toCelsius} value={valueF} ></Temperature>
        </div>
    )
}