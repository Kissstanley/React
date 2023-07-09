import {User} from "./User/User";
import {useEffect, useState} from "react";

export const Users=({setUserId})=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>setUsers(users))
    },[])
    return(
        <div>
            {users.map(user=><User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    )

}