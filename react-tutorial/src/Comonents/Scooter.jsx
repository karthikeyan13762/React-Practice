import React, { useState } from 'react';

function Scooter(){

    const[color,setColor]=useState('red');
    const[brand,setBrand]=useState('Honda');
    const[modal,setModal]=useState('Activa');
    const[year,setYear]=useState('2020')
    


    return(

       <div>
            <h1>My Scooter</h1>
            <p>Color :{color}</p>
            <p>Brand :{brand}</p>
            <p>Modal :{modal}</p>
            <p>Year :{year}</p>

       </div>
    )



}

export default Scooter;