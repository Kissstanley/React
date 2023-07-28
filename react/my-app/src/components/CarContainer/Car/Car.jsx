import {CarService} from "../../../services/CarService";
import {useContext} from "react";
import {Context} from "../CarContainer";

export const Car=({car})=>{
    const {setUpdatedCar,setOnSave}=useContext(Context)
    const {id,brand,price,year}=car

    const deleteCar=async ()=>{
        await CarService.deleteById(id)
        setOnSave()
    }


    return(
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setUpdatedCar(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    )
}