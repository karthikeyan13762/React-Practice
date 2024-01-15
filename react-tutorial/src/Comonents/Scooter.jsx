import React, { useState } from 'react';
import List from './List';

function Scooter(){
    
    const [scooter,setScooter]=useState({color:"Red",brand:"Honda",modal:"Activa",year:'2023'})

    const udateColor=()=>{
        setScooter(previousStateCopy=>{

            return {...previousStateCopy,color:"blue"}
        })
    }
        console.log(scooter)
    return(
       <div>
            <h1>My Scooter</h1>
            <p>Color :{scooter.color}</p>
            <p>Brand :{scooter.brand}</p>
            <p>Modal :{scooter.modal}</p>
            <p>Year :{scooter.year}</p>
            <button onClick={udateColor}>Change color</button>
            <List/>
       </div>
    )

}

export default Scooter;