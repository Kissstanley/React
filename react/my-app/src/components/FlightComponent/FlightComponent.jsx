import {useEffect, useState} from "react";
import {Flight} from "./Flight";
import {Post} from "../PostCompoment/Post";

export const FlightComponent=()=> {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(flights => setFlights(flights))
            .catch()
    }, [])
    return(
        <>
            {flights.map(flight=><Flight key={flight.mission_name} flight={flight}/>)}
        </>
    )
}

