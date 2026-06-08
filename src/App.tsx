import { useEffect, useRef, useState,memo } from 'react'

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
    <MemoizedCurrentCounter/>
    <Increase />
    <Decrease />
  </div>
}

/// wrap all the function in memo that
//  u dont want to re-render untill its related props are changed 
const MemoizedCurrentCounter = memo(function CurrentCounter(){
    return <div>
      1
    </div>
})

const Increase = memo(function(){
  return <>
  <button>Increase</button>
  </>
})

const Decrease = memo(function Decrease(){
  return <>
  <button>decrease</button>
  </>
})
export default App


/// all useEffects of all components will run in the last in the stack calling way




//this will only re-render the outer-box 