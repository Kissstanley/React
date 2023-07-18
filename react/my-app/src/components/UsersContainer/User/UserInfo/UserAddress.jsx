export const UserAddress =({user})=>{
    return(
        <div>
            <i><b>Address</b></i>
            <div>street:{user.address.street}</div>
            <div>suite :{user.address.suite }</div>
            <div>city:{user.address.city}</div>
        </div>
    )
}