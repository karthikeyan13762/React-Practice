import React, { useState } from 'react';

function Scooter(){

    // const[color,setColor]=useState('red');
    // const[brand,setBrand]=useState('Honda');
    // const[modal,setModal]=useState('Activa');
    // const[year,setYear]=useState('2020')
    

    const [scooter,setScooter]=useState({color:"Red",brand:"Honda",modal:"Activa",year:'2023'})


    return(

       <div>
            <h1>My Scooter</h1>
            <p>Color :{scooter.color}</p>
            <p>Brand :{scooter.brand}</p>
            <p>Modal :{scooter.modal}</p>
            <p>Year :{scooter.year}</p>

       </div>
    )



}

export default Scooter;