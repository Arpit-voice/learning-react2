import { useRef } from "react"

function useDebounce(originalFn,waitingTime){
    const currentClock = useRef()

    return function(){
        clearTimeout(currentClock.current)
        currentClock.current=setTimeout(originalFn , waitingTime)
    }

}

export default useDebounce
