import {Cars} from "./Cars/Cars";
import {CarForm} from "./CarForm/CarForm";
import {createContext, useState} from "react";

export const Context=createContext(null)
const CarContainer=()=>{
    const [onSave,setOnSave]=useState(null)
    const [updatedCar,setUpdatedCar]=useState(null)
    return(
            <Context.Provider value={{
                onSave,
                setOnSave:()=>setOnSave(prev=>!prev),
                updatedCar,
                setUpdatedCar
            }}>
        <div>
            <CarForm setOnSave={setOnSave} updatedCar={updatedCar} setUpdatedCar={setUpdatedCar}/>
            <Cars onSave={onSave} setOnSave={setOnSave} setUpdatedCar={setUpdatedCar}/>
        </div>
            </Context.Provider>
    )
}
export default CarContainer