import {useEffect, useState} from "react";
import {Flight} from "./Flight";
import {Post} from "../PostCompoment/Post";

export const FlightComponent=()=> {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(flights => {
                const filtered=flights.filter(value=>value.launch_year!=='2020')
                setFlights(filtered)
            })
            .catch()
    }, [])
    return(
        <>
            {flights.map(flight=><Flight key={flight.mission_name} flight={flight}/>)}
        </>
    )
}

