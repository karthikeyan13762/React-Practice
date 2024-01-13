import React from 'react'

import Apple from './Apple'



// praameters props vanguroam destrustring mulakavum edukalam
function Car({propps}) {

console.log(propps);

    return <>
        <h1>Hi Iam Car</h1>


       

        <h1>{propps.brand} color is {propps.color} </h1>

    </>;

  }

export default Car