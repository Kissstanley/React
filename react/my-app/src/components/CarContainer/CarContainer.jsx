import {Cars} from "./Cars/Cars";
import {CarForm} from "./CarForm/CarForm";
import {useState} from "react";
const CarContainer=()=>{
    const [onSave,setOnSave]=useState(null)
    const [updatedCar,setUpdatedCar]=useState(null)
    return(
        <div>
            <CarForm setOnSave={setOnSave} updatedCar={updatedCar} setUpdatedCar={setUpdatedCar}/>
            <Cars onSave={onSave} setOnSave={setOnSave} setUpdatedCar={setUpdatedCar}/>
        </div>
    )
}
export default CarContainer