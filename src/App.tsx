import { useState } from 'react'





function App() {
  return (
    <>
      <LightBulb />
    </>
  )
}


function LightBulb(){
  const [bulb, setBulb]= useState(true);

  return <div>
    <BulbState bulb ={bulb}/>
    <ToggleBulbState setBulb = {setBulb}/>

  </div>
}

function BulbState(props){

  return <div>
    { props.bulb ? "bulb is on" : "bulb is off currently"}
  </div>
}

function ToggleBulbState(props){
  
  function Zeroto1(){
    props.setBulb( currentState => !currentState)
  }
  
  return <div>
    <button onClick ={Zeroto1}>Toggle the bulb </button>
  </div>
}










export default App
