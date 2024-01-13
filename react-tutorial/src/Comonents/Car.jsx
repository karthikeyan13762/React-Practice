import React from 'react';


class Car extends React.Component{

  constructor(){
    super();

    this.state={color:"Red",brand:"Audi"}
  }

  render(){

    return(
     <>

        <div>

        <h1>This Class Component color is {this.state.color} and Brand is {this.state.brand}</h1>
          <button onClick={()=>{this.setState((previousclassStateValue)=>{ return{...previousclassStateValue,color:"Blue"} })}}>Change Color</button>
        </div>


     </>
       

     
    )
  }

}


export default Car;