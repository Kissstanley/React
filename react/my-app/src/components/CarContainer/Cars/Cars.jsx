import {Car} from "../Car/Car";
import {useContext, useEffect, useState} from "react";
import {CarService} from "../../../services/CarService";
import {Context} from "../CarContainer";

export const Cars=({setOnSave,setUpdatedCar})=>{
    const [cars, setCars]=useState([])
    const {onSave} =useContext(Context)
    useEffect(()=>{
        CarService.getAll().then(({data})=>setCars(data))
    },[onSave])
    return(
        <div>
            {cars.map(car=><Car key={car.id} car={car} setOnSave={setOnSave} setUpdatedCar={setUpdatedCar}/>)}
        </div>
    )
}