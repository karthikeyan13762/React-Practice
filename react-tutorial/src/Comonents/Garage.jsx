import React from 'react'
import Car from './Car'
import Apple from './Apple'
function Garage() {
    const isDooropen=false
    const brand="Jaguar"

    const text= `Hi Iam ${brand} car`

    // const carInfo={brand:"Ferrari", color:'RED'}
    const carInfo={}
    const applinfo={type:'fuji',color:"red"}

    const showCarinfo=carInfo.brand !==undefined && applinfo.color!==undefined 


    const carList=[{brand:"Audi",color:"red"},
  
    {brand:"ferari",color:"blue"},
    {brand:"bmw",color:"yellow"},
    {brand:"Ford",color:"red"}]

    const numbers=[1,2,3,4,5,6,7,8,9,10]
    return (
      <>
        <h1>Who lives inside my garage</h1>

        {
          showCarinfo && <Car propps={carInfo}/>
        }
        
        <Apple applinfo ={applinfo}/>

        {
          isDooropen ? <h1>Door is open </h1>: <h1>Door is Closed </h1>
        }

        <ul>
          {
            carList.map((items)=> <li key={items.brand}><Car propps={items}/></li>)
          }
        </ul>
        <ul>{
          numbers.map((items,index)=> <p key={index}>{items}</p>)

        }</ul>
      </>
    );
  }
  
export default Garage