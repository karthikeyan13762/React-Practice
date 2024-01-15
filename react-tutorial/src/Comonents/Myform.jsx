import React, { useState } from 'react'

function Myform() {
    // const [name,setName]=useState('')


    const [inputs,setinputs]=useState({phone:'+91',email:'@gmail.com',country:'India',about:'I am student'})
    const handleSubmited=(e)=>{
        e.preventDefault()
        console.log(inputs)
        
    }

    const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setinputs((previous)=>{
            return {...previous,[name]:value}
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmited}>
       <div>
       <label>Enter Your Name : <input typec='text' name='name' placeholder='enter your name' onChange={handleChange}/></label>
       </div><br/>
       <div>
       <label>Enter Your age : <input type='text' name='age' placeholder='enter your age' onChange={handleChange}/></label>
       </div><br/>
       <div>
       <label>Enter Your email : <input type='email' name='email' placeholder='enter your email' value={inputs.email} onChange={handleChange}/></label>
       </div><br/>
       <div>
       <label>Enter Your Phone : <input type='text' name='phone' placeholder='enter your pkone' value={inputs.phone} onChange={handleChange}/></label>
       </div><br/>
       <div>
       <label>Select Your Country: <select name='country' onChange={handleChange} value={inputs.country}>
        <option value={'India'}>India</option>
        <option value={'Ameriaca'}>Ameriaca</option>
        <option value={'china'}>China</option>
       </select></label>
       </div><br/>
       <div>
       <label>About You:
       <textarea name='about' onChange={handleChange} value={inputs.about}/>
      </label>
       </div><br/>
       

        <input type='submit' value={'submit form'} />  
        </form>
        
    </div>
  )
}

export default Myform