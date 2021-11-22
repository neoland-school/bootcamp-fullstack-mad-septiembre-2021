import CourseCard from "../../components/card/card";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import './style.css'
export default function Home (){


useEffect(()=>{
    async function getCourses(){
        const req = await fetch('http://localhost:3001/courses')
        const response = await req.json();
        setCourses(response)
    }
    getCourses()
},[])


let [courses, setCourses]= useState([])


// .then(c=>{
//     setCourses(c)
//     console.log(courses)})

// console.log(courses)

    return(
    <React.Fragment>
        <Header></Header>
        <main className='main__container'>
        {courses.map(c=><CourseCard info={c}></CourseCard>)}
        </main>
    </React.Fragment>
    )
}