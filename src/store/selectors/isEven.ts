import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const evenSelector = selector({
    key : "isEvenSlector",
    get : function ( {get} ){
        const currentCount = get(counterAtom)
        const isEven = currentCount%2 == 0;
        return  isEven;
    }
})


// this is how u can derive some state(isEven) from any atom (counterAtom) 
// get is for getting the attom 