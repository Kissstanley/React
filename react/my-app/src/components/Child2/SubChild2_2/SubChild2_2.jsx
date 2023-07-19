import {useContext} from "react";
import {ThemeContext} from "../../../App";

export const SubChild2_2 =()=>{
   const {setData}=useContext(ThemeContext)
    return(
        <div>
            <button onClick={()=>setData(prev=>[...prev,'-'])}>fill it out</button>
        </div>
    )
}