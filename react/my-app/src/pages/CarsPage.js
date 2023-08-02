import {Component} from "react";
import {carService} from "../services/carService";
import {Cars} from "../components/Cars";

export class CarsPage extends Component{
    render() {
        return(
            <div>
            <Cars/>
            </div>
        )
    }
}