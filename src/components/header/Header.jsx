import React from 'react'
import style from './Header.module.css'
import Typewriter from "typewriter-effect"

//import Typical from 'react-typical'
function TopImage() {
  

    return (
        <div className={style.wrap}>           
            <div className={style.professional} >
                <Typewriter
                options={{autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "I am Javier Sanchez",
                    "Electric Engineer",
                    "FullStack Develop",
                ],
                }}/>
                </div>
                <img src='https://i.ibb.co/6H1gkgM/El-texto-del-p-rrafo-3.png' alt='foto-Javier' className={style.image} ></img>
        </div>
    )
}

export default TopImage
