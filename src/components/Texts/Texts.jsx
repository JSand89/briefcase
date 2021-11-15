import React from 'react'
import style from './Text.module.css'
function Texts() {
    return (
        <div className={style.text}>
            <h2 className={style.profile}>PROFILE</h2>
            <p>
            After a life of working for the oil & gas sector I decide to change and study software design, at the moment I´m Full Stack developer with projects in MERN and MEAN stack. 
            </p>
            <p>
            I enjoy to study and solve problems. Thanks to my previous job experiences I have been able to develop my soft abilities like teamwork and leadership of interdisciplinary groups.
            </p>
            <h2 className={style.skills}>SKILLS</h2>
            <div className={style.image1} ></div>
{/* this class is empety because probabli change the BG color whit change in the skills presentation */}
            <div className={style.bgExperience}>
            <h2 className={style.skills}>EXPERIENCE</h2>
            <h3 className={style.subtitule} >Sub gerente <br/>Ingenieria Servicios y Desarrollos S.A.S</h3>
            <p>
            As assistant manager I lead an interdisciplinary group in a R&D project which is actually between the top 100 most innovative projects competing for the Entrepreneurship World Cup, three patents and intent from investor over $5M            </p>
            <p>
            I enjoy to study and solve problems. Thanks to my previous job experiences I have been able to develop my soft abilities like teamwork and leadership of interdisciplinary groups.
            </p>
            </div>
            <div className={style.bgAchivements}>
            <h2 className={style.skills}>ACHIEVEMENTS</h2>
            <h3 className={style.subtitule} >Patents</h3>
            <p>
            GENERADOR IONICO DE ENERGÍA TÉRMICA RENOVABLE<br/>
            co,NC2020/0004755              
            </p>
            <p>
            SISTEMA DE DESINTEGRACIÓN DE VIRUS Y MÉTODO ASOCIADO CON EL MISMO <br/>
            co, NC2020/0005589            
            </p>
            </div>
        </div>
    )
}

export default Texts
