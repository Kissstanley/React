import {Car} from "../Car/Car";
import {useEffect, useState} from "react";

export const Cars=({onSave,setOnSave,setUpdatedCar})=>{
    const [cars, setCars]=useState([])

    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(cars=>cars.json())
            .then(cars=>setCars(cars))
    },[onSave])

    return(
        <div>
            {cars.map(car=><Car key={car.id} car={car} setOnSave={setOnSave} setUpdatedCar={setUpdatedCar}/>)}
        </div>
    )
}