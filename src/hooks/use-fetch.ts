import {useEffect, useState } from "react";

function useFetch(url){
    const [data ,setData] = useState(null);

    useEffect(()=>{                                     // cant make this ascync 
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();       //CALL 
  }, [url]);  

    return {data}
}

export default useFetch