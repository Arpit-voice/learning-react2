import { useEffect, useRef, useState } from 'react'
import usePrev from './hooks/use-prev';

function App() {
  const [state, setState] = useState(0)
  console.log("1st step-initial state: " + state) //1st step
  const prev = usePrev(state); // 2nd step
  console.log("6th step-initial prev: " + prev)  // 6th step /// :)) dangerous knowledgeee


  useEffect(function () {
    console.log("9th step-useffect of App") // 9th step
  },[])

  return <>
    <p>{state}</p>
    <button onClick={() => setState(function (current) {
      console.log("0th step-updated state: " + (current + 1))  // 0th step
      return (current + 1)
    }
    )}>
      click me
    </button>
    <script>function (){console.log("hi")}</script>
    <p>the previous value was {prev} </p>
  </>

}
export default App


/// all useEffects of all components will run in the last in the stack calling way