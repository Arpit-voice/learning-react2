import { useEffect, useRef } from "react"
function usePrev(value) {
    console.log("3rd step-value in hook: " + value)  // 3rd  step
    const ref = useRef(null)
    console.log("4th step-ref in hook: " + ref.current) // 4th step


    useEffect(function () {
        console.log("7th step-ref in useEffect before: " + ref.current)     //7th step
        ref.current = value;
        console.log("8th step-ref in useEffect after: " + ref.current)    // 8th step
    }, [value])

    return ref.current ///5th step
}

export default usePrev



/// the only gyan for this 
// firstly the control reaches return thing then useeffect irrespective of component or hook
/// in lay man term the component/ function which uses defined hook under the hood , are basically custom hook