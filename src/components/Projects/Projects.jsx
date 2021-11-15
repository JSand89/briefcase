import {React, useState, useEffect} from 'react'
import Data from '../../projects.json'
import Project from '../Project/Project'

function Cards() {
    const [search,searchFunction]=useState('Search')
    function cond(e){
        e.Name.includes(search)
        console.log(e.Name.includes(search))
    }

    var Filter = search ==="Search"| search ===''? Data: Data.filter(item=>item.tecnologys.includes(search))
    console.log(Filter)
    useEffect(()=>{
        Filter=search === "Search"| search === ''? Data:Data.filter(cond)
        console.log(Filter)


    },[search])
    return (
        <>
        <input type="search" placeholder={search} 
        onChange= {Event=>searchFunction(Event.target.value)} ></input>
        <div>
            {Filter.map(item=><Project props={item} key={item.id}/>)}
        </div>
        </>
    )
}

export default Cards