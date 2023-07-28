import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {CarService} from "../../../services/CarService";
import {Context} from "../CarContainer";

export const CarForm=()=>{
    const {register,handleSubmit, setValue,reset}=useForm({})
    const {setOnSave,updatedCar,setUpdatedCar} = useContext(Context);

    if (updatedCar){
        setValue('brand',updatedCar.brand)
        setValue('price',updatedCar.price)
        setValue('year',updatedCar.year)
    }

    const save=async (car)=>{
            await CarService.create(car);
            reset()
            setOnSave()
    }
    const update=async (car)=>{
        await CarService.updateById(updatedCar.id,car)
        reset()
        setOnSave()
        setUpdatedCar(null)
    }
    return(
        <form onSubmit={handleSubmit(!updatedCar?save:update)}>
            <div><label>brand: <input type={"text"} {...register('brand',{required:true})}/></label></div>
            <div><label>price: <input type={"text"} {...register('price',{valueAsNumber:true})}/></label></div>
            <div><label>year: <input type={"text"} {...register('year',{valueAsNumber:true})}/></label></div>
            <button>{!updatedCar?'Save':'Update'}</button>
        </form>
    )
}