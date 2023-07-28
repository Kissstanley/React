import {apiPersonService} from "./apiServices";
import {urls} from "../urls/urls";
export const UserService={
    loadData:async (setUsers)=>{
        let response=await apiPersonService.get(urls.users.base)
        setUsers(response.data)
    },
    create:(user)=>apiPersonService.post(urls.users.base,user)
}