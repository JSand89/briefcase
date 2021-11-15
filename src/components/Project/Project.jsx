import React from 'react'
import style from './project.module.css'

function Project({props}) {
    return (
        <div>
            <ul className={style.Card}>
                <li className={style.image}><img src={props.image} alt="imagen"/></li>
                <li>Reto: {props.name}</li>
                <li><a href={props.deploy}>Project Deploy</a></li>
                <li><a href={props.git}>Repository Link</a></li>
                <li>Tecnologys: {props.tecnologys}</li>


            </ul>
        </div>
    )
}

export default Project
