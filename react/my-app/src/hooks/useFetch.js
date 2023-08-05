import {useEffect, useState} from "react";


export const useFetch=(endpoint)=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then(value=>value.json())
            .then(value=>setData(value))
    },[])
    return data
}