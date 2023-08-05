import {useState} from "react";

export const useArray=(defaultValue)=>{
    const [data,setData]=useState(Array.isArray(defaultValue)?defaultValue:[])

    const add=(item)=>{
        setData(prev=>[...prev,item])
    }

    const remove=(idx)=>{
        setData(prev =>{
            prev.splice(idx,1)
            return[...prev]
        })
    }

    return {data,add,remove}
}