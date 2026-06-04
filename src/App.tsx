import { useState } from 'react'

function useCounter(){
  const [count , setCount ] = useState(0);

  function increaseCount(){
    setCount(currentValue => currentValue + 1)
  }

  return {
    count : count ,
    increaseCount : increaseCount
  }

}

function App(){
  const {count ,increaseCount} = useCounter()

  return <>
    <button onClick={increaseCount} >
      increase {count}
    </button>

  </>
}

export default App
