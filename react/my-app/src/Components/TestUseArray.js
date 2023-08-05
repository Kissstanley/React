import {useArray} from "../hooks/useArray";
import {useRef} from "react";

export const TestUseArray = () => {
    const {data,add,remove}=useArray([1,3,'fdd','fdk'])

    const ipt =useRef()

    const addItem=()=>{
        add(ipt.current.value)
        ipt.current.value=''
    }

    return (
        <div>
            <div>
                <input type={"text"} ref={ipt}/>
                <button onClick={addItem}>add</button>
            </div>
            <div>
                {data.map((item,idx)=>(
                    <div key={idx}>
                        {item}<button onClick={()=>remove(idx)}>remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

