import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

export const CarForm=({setOnSave,updatedCar,setUpdatedCar})=>{
    const initialState={
        brand:'',
        price:'',
        year:'',
    }
    const [car,setCar]=useState(initialState)

    const {register,handleSubmit, setValue}=useForm({
        mode:'all'
    })
    useEffect(()=>{
        if (updatedCar){
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        }
    },[updatedCar])

    const save=(car)=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car)
        }).then(car=>{
            if (!car.ok){
                throw Error('error')
            }
        })
            .then(()=> {
                setOnSave(prev=>!prev)
                setCar(initialState)
            })
    }
    const update=(car)=>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updatedCar.id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car)
        }).then(car=>car.json())
            .then(()=>{
                setOnSave(prev=>!prev)
                setUpdatedCar(null)
            })
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