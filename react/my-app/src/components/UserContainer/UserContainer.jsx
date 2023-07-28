import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";
import {useState} from "react";
export const UserContainer=()=>{
    const[users ,setUsers]=useState([])
    const [onSave,setOnSave]=useState(null)
    return(
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users} setUsers={setUsers} onSave={onSave} setOnSave={setOnSave}/>
        </div>
    )
}