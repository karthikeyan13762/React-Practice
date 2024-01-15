import React, { useState } from 'react'

function List() {

    const[list,setList ] = useState([])
    console.log(list)
    
    const[count,setCount]=useState(1)
    const addItems=()=>{
    const itemName='Item '+count
    setList((previous)=>{return [...previous,itemName]})
    // object la Propert name vachu update panirpom inga Aray la directa item vache mathirpom

    setCount((previous)=>{return previous+1})
}

  return (
    <div>
        <h1>List</h1>
        <button onClick={addItems}>add item</button>
        <ul>
            {
                list.map((item,index)=><li key={index}>{item}</li>)  
            }
        </ul>

    </div>
  )
}

export default List