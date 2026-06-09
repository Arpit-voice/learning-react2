import { useEffect, useRef, useState,memo } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'
import { evenSelector } from './store/selectors/isEven'

function App(){
  return <>
    <RecoilRoot>
        <Buttons/>
        <Counter/>
        <IsEven/>
    </RecoilRoot>
  </>
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom)
  return <>
  <button onClick ={()=>{setCount(c=>c+2)}}>Increase By 2</button>
  <button onClick ={()=>{setCount(c=>c-1)}}>decrease By 1</button>
  </>
}

function Counter(){
  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even = useRecoilValue(evenSelector)
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}
export default App