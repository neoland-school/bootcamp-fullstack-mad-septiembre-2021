import React from "react"
import './style.css'


export default function CourseCard(props){

    console.log(props.info.Teacher.Name)
    console.log(props.info.Teacher.Email)

    return(<React.Fragment>
        <div className='course__container'>
        <h2>{props.info.Name}</h2>
        <h3>{props.info.School}</h3>
        <div>
            <h4>{props.info.Teacher.Name}</h4>
            <h5>{props.info.Teacher.Email}</h5>
        </div>
        <h3>{props.info.Startingdate}</h3>
        <h3>{props.info.Enddate}</h3>
        </div>
        </React.Fragment>
    )
}