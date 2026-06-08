import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/use-fetch';
// import useFetch from './hooks/use-fetch';

function App() {
  const [currentPost,setCurrentPost]= useState(1)
  const {data,loading,retryTime} = useFetch("https://jsonplaceholder.typicode.com/todos/"+ currentPost,5)

  if(loading){
    return <> loading ...</>
  }


  return <>
    <button onClick={()=>setCurrentPost(1)}>1</button>
    <button onClick={()=>setCurrentPost(2)}>2</button>
    <button onClick={()=>setCurrentPost(3)}>3</button>
    {JSON.stringify(data)}
  </>
}


export default App


/// all useEffects of all components will run in the last in the stack calling way