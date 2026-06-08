import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/use-fetch';
// import useFetch from './hooks/use-fetch';

function App() {
  const {data} = useFetch("https://jsonplaceholder.typicode.com/todos/1")

  return <>
    {JSON.stringify(data)}
  </>
}


export default App


/// all useEffects of all components will run in the last in the stack calling way