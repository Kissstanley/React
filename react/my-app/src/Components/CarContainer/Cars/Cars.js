import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../../redux/actions/carActions";
import Car from "../Car/Car";

const Cars = () => {

    const dispatch=useDispatch()
    const {cars}=useSelector(state => state.cars)
    console.log(cars);

    useEffect(()=>{
        dispatch(carActions.read())
    },[])
    console.log(cars);


    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;