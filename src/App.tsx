import { useEffect, useRef, useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'


function App() {


  return <>
  <RecoilRoot>
    <Counter/>
  </RecoilRoot>
  </>
}

function Counter(){
  

  ///obselete re-rendering of all elements
  return <div>
    <CurrentCounter />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCounter(){
  //subscribing to the counterAtom
  const count = useRecoilValue(counterAtom)

    return <div>
      {count}
    </div>
}
function Increase(){
  const setCount = useSetRecoilState(counterAtom)

  return <>
  <button onClick={()=> {setCount(curr => curr + 1)}}>Increase</button>
  </>
}
function Decrease(){
  const setCount = useSetRecoilState(counterAtom)

  return <>
  <button onClick={()=> {setCount(curr => curr -1)}}>decrease</button>
  </>
}
export default App


/// all useEffects of all components will run in the last in the stack calling way