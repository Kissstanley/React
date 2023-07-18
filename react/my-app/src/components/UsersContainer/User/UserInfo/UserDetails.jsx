export const UserDetails =({user})=>{
    return(
        <div>
            <h3>id:{user.id}</h3>
            <h3>name:{user.name}</h3>
            <div>username:{user.username}</div>
            <div>email:{user.email}</div>
            <div>phone:{user.phone}</div>
            <div>website:{user.website}</div>
        </div>
    )
}