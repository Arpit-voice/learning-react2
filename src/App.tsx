import { createContext, useContext, useState } from 'react'


const bulbContext = createContext();

function ContextProvider({children}){
  const [bulb, setBulb]=useState(true);

    return <bulbContext.Provider value ={{bulb :bulb , setBulb: setBulb}}>
        {children}                       
    </bulbContext.Provider>
}

function App() {

  return (
    <>
      <ContextProvider>
        <LightBulb/>
      </ContextProvider>
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
