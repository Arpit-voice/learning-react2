import { useEffect, useRef, useState } from 'react'

function App(){
  return <>
    <br></br>
    <Counter/>
  </>
}

function Counter(){
  const [state,setState] = useState(0)

  useEffect(()=>{
    setInterval(() => {
      setState(c=>c+1)
    }, 3000);
  },[])


  //even though there are no props that are passed to children and no change in props of children 
  // it all got re-rernder just because its parent re-rendersd
  ///obselete re-rendering of all elements 
  return <div>
    <CurrentCounter />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCounter(){
    return <div>
      1
    </div>
}
function Increase(){
  return <>
  <button>Increase</button>
  </>
}
function Decrease(){
  return <>
  <button>decrease</button>
  </>
}
export default App


/// all useEffects of all components will run in the last in the stack calling way