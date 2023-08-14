import {carService} from "../../services/carService";

const carActionTypes={
    SET_CARS: 'SET_CARS',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'
}

const actions={
    setCars:(payload)=>({type:carActionTypes.SET_CARS,payload}),
    setCarForUpdate:(payload)=>({type: carActionTypes.SET_CAR_FOR_UPDATE,payload})
}

const read=()=>async (dispatch)=>{
    const {data}=await carService.getAll()
     dispatch(actions.setCars(data))
}

const create=(car)=>async dispatch=> {
    await carService.create(car)
    await dispatch(read())
}

const update=(id,car)=>async dispatch=>{
    await carService.updateById(id,car)
    dispatch(actions.setCarForUpdate(null))
    await dispatch(read())
}

const deleteCar=(id)=>async dispatch=>{
    await carService.deleteById(id)
    await dispatch(read())

}

const carActions={
    read,
    create,
    update,
    deleteCar,
    setCarForUpdate:actions.setCarForUpdate
}

export {
    carActions,
    carActionTypes
}