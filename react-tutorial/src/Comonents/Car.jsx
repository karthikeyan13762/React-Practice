import React from 'react';


class Car extends React.Component{

  constructor(){
    super();

    this.state={color:"Red"}
  }

  render(){

    return(
     <>

        <div>

        <h1>This Class Component color is {this.state.color}</h1>
          <button onClick={()=>{this.setState({color:"blue"})}}>Change Color</button>
        </div>


     </>
       

     
    )
  }

}


export default Car;