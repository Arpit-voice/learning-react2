import { createContext, useContext, useState } from 'react'


const bulbContext = createContext();
function App() {

  const [bulb, setBulb]=useState(true);
  return (
    <>
    <bulbContext.Provider value ={{bulb :bulb , setBulb: setBulb}}>
         <LightBulb />                          {/* wrapping this will pass this context to all  */}
    </bulbContext.Provider>
    </>
  )
}


function LightBulb(){

  return <div>
    <BulbState />
    <ToggleBulbState/>

  </div>
}

function BulbState(){
  const obj = useContext(bulbContext);
  const bulb =  obj.bulb ;


  return <div>
    { bulb ? "bulb is on" : "bulb is off currently"}
  </div>
}

function ToggleBulbState(){
  const {setBulb} = useContext(bulbContext)  /// deconsrtucted and stored the object things

  function Zeroto1(){
    setBulb( currentState => !currentState)
  }
  
  return <div>
    <button onClick ={Zeroto1}>Toggle the bulb </button>
  </div>
}










export default App
