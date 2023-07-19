import {useContext} from "react";
import {ThemeContext} from "../../../App";

export const SubChild1_1 =()=>{
    const {data}=useContext(ThemeContext)
    return(
        <div>
            {data.map(line=>line)}
        </div>
    )
}