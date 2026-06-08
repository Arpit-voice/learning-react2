import {useEffect, useRef, useState } from "react";

function useFetch(url,retryTime){
    const [data ,setData] = useState({});
    const [loading, setLoading] = useState(true)

    async function fetchData() {
      setLoading(true)
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false)
    }
    useEffect(()=>{                                     // cant make this ascync 
    fetchData();       //CALL 
    }, [url]);  

    // refetching automatically without refreshing
    useEffect(()=>{
        setInterval(fetchData,retryTime*1000)}
    ,[])

    return {
        data,
        loading ,
    }
}

export default useFetch