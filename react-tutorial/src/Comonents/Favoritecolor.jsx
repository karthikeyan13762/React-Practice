import React from 'react'

import { useState } from 'react'


function Favoritecolor() {

const [color,seColor]=useState('blue')

  return (
    <div>

    <h1>My Favourate color is {color}</h1>

    <button onClick={()=>{seColor('Red')  }} >Change color</button>

    </div>
  )
}

export default Favoritecolor