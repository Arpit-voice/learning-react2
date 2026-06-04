import { useState } from 'react'



function App(){
  const [count , setCount ] = useState(0);

  function increaseCount(){
    setCount(currentValue => currentValue + 1)
  }


  return <>
    <button onClick={increaseCount} >
      increase {count}
    </button>

  </>
}

export default App
