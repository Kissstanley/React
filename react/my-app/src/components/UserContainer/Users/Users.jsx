import {useEffect, useState} from "react";
import {User} from "../User/User";

export const Users=({users,setUsers})=>{
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users=>users.json())
            .then(users=>setUsers(users))
    },[])
    return(
        <div>
            {users.map(user=><User key={user.id} user={user}/> )}
        </div>
    )
}