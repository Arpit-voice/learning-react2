import { useEffect, useRef, useState } from 'react'
import usePrev from './hooks/use-prev';

function App() {
  const [state, setState] = useState(0)
  const prev = usePrev(state); 

  return <>
    <p>{state}</p>
    <button onClick={() => setState(curr=> curr+1)}>
      click me
    </button>
    <p>the previous value was {prev} </p>
  </>

}
export default App


/// all useEffects of all components will run in the last in the stack calling way