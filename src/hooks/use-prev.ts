import { useEffect, useRef } from "react"
function usePrev(value) {
    const ref = useRef(null)

    useEffect(function () {
        ref.current = value;
    }, [value])

    return ref.current 

export default usePrev



/// the only gyan for this 
// firstly the control reaches return thing then useeffect irrespective of component or hook
/// in lay man term the component/ function which uses defined hook under the hood , are basically custom hook