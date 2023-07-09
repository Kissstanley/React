import {useState} from "react";

export const Flight=({flight})=>{
    const[show,setShow]=useState([])
    const {mission_name,launch_year,mission_patch_small}=flight;
    return(
        <>
            <div>mission name: {mission_name}</div>
            <div>launch year: {launch_year}</div>
            <div>small patch:{mission_patch_small}
            </div>
        </>
    )
}