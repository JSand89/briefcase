import {React, useState, useEffect} from 'react'
import Data from '../../projects.json'
import Project from '../Project/Project'
import style from './projects.module.css'

function Cards() {
    const [search,searchFunction]=useState('Search')
    function cond(e){
        e.tecnologys.includes(search)
        // console.log(e.Name.includes(search))
    }

    var Filter = search ==="Search"| search ===''? Data: Data.filter(item=>item.tecnologys.includes(search))
    console.log(Filter)
    useEffect(()=>{
        Filter=search === "Search"| search === ''? Data:Data.filter(cond)
        console.log(Filter)


    },[search])
    return (
        <>
            <h2 className={style.profile}>PROJECTS</h2>
        <input type="search" 
        placeholder={search} 
        onChange= {Event=>searchFunction(Event.target.value)}
        >
        </input>
        <div className={style.Cards}>
            {Filter.map(item=><Project props={item} key={item.id}/>)}
        </div>
        </>
    )
}

export default Cards