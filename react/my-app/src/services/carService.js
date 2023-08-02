import {urls} from "../constants/urls";
import {okApiServ} from "./okApiServ";
class CarService{
    getAll(){
        return okApiServ.get(urls.okten.cars)
    }
}

export const carService=new CarService()