import { useEffect, useRef, useState } from 'react'
import useDebounce from './hooks/use-debounce';

function App() {
    const InputChangeFn = useDebounce(()=>{
    fetch("api.amazon.com/search/") /// do something 
    },500) 

  return <>
  <input type="text" placeholder='write something' onChange={InputChangeFn}></input>
  </>
}


export default App


/// all useEffects of all components will run in the last in the stack calling way