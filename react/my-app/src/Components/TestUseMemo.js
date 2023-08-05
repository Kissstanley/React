import {useCallback, useMemo, useState} from "react";
import {Post} from "./Post";
import {useToggle} from "../hooks/useToggle";

export const TestUseMemo=()=>{
    const [count,setCount]=useState(0)
    const [posts,setPosts]=useState([])
    const heavyCalculation=(num)=>{
        for (let i = 0; i < 1000000000; i++) {
            num += 1
        }
            return num
    }
    const heavy=useMemo(()=>heavyCalculation(count),[count])

    const changeValue=(action)=>{
        setCount(action==='dec'?count-1:count+1)
    }

    const addPost=useCallback(()=>setPosts([...posts,'New post']),[posts])




    // Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
    const toggle=useToggle(false)
    console.log(toggle);

    return(
        <div>
            <button onClick={()=>changeValue('inc')}>Plus</button>
            <button onClick={()=>changeValue('dec')}>Minus</button>
            <p>Count: {count}</p>
            <p>Calculation:{heavy}</p>
            <Post  posts={posts} addPost={addPost}/>
            <br/>
        </div>
    )
}