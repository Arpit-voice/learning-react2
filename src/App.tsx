import { useEffect, useRef, useState } from 'react'


function App() {


  return <>
    <Counter/>
  </>
}

function Counter(){
  const [count,setCount] = useState(0)

  ///obselete re-rendering of all elements
  return <div>
    <CurrentCounter count= {count}/>
    <Increase setCount= {setCount}/>
    <Decrease setCount= {setCount}/>
  </div>
}

function CurrentCounter({count}){
    return <div>
      {count}
    </div>
}
function Increase({setCount}){
  return <>
  <button onClick={()=> {setCount(curr => curr + 1)}}>Increase</button>
  </>
}
function Decrease({setCount}){
  return <>
  <button onClick={()=> {setCount(curr => curr -1)}}>decrease</button>
  </>
}
export default App


/// all useEffects of all components will run in the last in the stack calling way