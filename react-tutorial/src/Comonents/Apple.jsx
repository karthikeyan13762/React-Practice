import React from "react";
class Apple extends React.Component{
// applae class vanthu react react kula ulla component class extend panuthu 
// jsx samantha pata visayngala retun pananumna Render method ulla jsx return panannum
// Render method class comonent la than varum
render(){
   const{applinfo} =  this.props
   console.log(applinfo)
      const   {type,color}   =applinfo
    return(
        <h1>Im  a  {color} {type} apple</h1>
    )
}
    
}

export default Apple