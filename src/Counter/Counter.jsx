import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
  const [count,setCounter] = useState(0);
  const [isRunning , setRunning] = useState(true);

  useEffect(()=> {

  let counter;

  if(isRunning){
    counter = setInterval(() =>{
      setCounter(prevCount => prevCount + 1);
    },1000); 
  }

  return() => clearInterval(counter);
  },[isRunning]);



function startstop(){
  setRunning(!isRunning);
}



function Reset(){

  setCounter(0);
}



  return (
    <div>

      <div style={{  display:'flex',justifyContent:'center',alignItems:'center', height:'100vh'}}>
        <div>
          <h1 className='text-center m-3'>Counter</h1>
          <h1 className='text-center m-3'>{count}</h1>
          <Button variant="success" className=' m-3' onClick={startstop} >{isRunning ? 'STOP' : 'START'}</Button>
          <Button variant="warning" className=' m-3' onClick={Reset}>RESET</Button>


        </div>


      </div>
      
    </div>
  )
}

export default Counter
