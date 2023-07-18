import {UserDetails} from "./UserInfo/UserDetails";
import {UserAddress} from "./UserInfo/UserAddress";
import {Company} from "./UserInfo/Company";
export const User=({user})=>{
    return(
        <>
            <UserDetails
                user={user}
            />
            <UserAddress
                user={user}
            />
            <Company
                user={user}
            />

        </>
    )
}