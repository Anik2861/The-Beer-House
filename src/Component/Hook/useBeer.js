import { useEffect, useState } from "react"

const useBeer=()=>{
    const [beers,setBeers]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBeers(data))
    },[]);
  return [beers,setBeers]
}
export default useBeer;