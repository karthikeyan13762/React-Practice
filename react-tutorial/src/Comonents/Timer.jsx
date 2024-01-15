import { useEffect, useState } from "react"


function Timer(){
    const [count,setCount]=useState(0)

    // ippo current state value 0 iruku page refresh agum pothu sthu 1 aganum athuku intha mathari kodukanum

    // useEffect(()=>{
    //     setCount(1)

    // },[])

    useEffect(()=>{

        setTimeout(()=>{
            setCount((prev)=>{
                return (prev+ 1)
            })
        },1000)
    })


    // useEffect(()=>{
    //     console.log("Screen Refreshed")
    //     stopCount()
    // },[count])

    const stopCount=()=>{
        if(count>10){
            setCount(1)
        }
    }

    function updateCount(){
        setCount((previous)=>{return previous+1})
    }
    return (

        <>

        <h1>I have render {count} Times</h1>

        <button onClick={updateCount}>Increease Count</button>
        </>
    )
}

export default Timer;
