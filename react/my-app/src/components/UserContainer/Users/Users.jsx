import {useEffect, useState} from "react";
import {User} from "../User/User";
import {UserService} from "../../../services/UserService";

export const Users=({users,setUsers})=>{
    useEffect(()=>{
            UserService.loadData(setUsers);
        },[])
    return(
        <div>
            {users.map(user=><User key={user.id} user={user}/> )}
        </div>
    )
}