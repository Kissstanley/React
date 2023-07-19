export const UserComponent=({user,setUserId})=>{
    const{id,name,username,email}=user
    return(
        <div>
            <div>
                <h3>id:{id}</h3>
                <h3>name:{name}</h3>
                <div>username:{username}</div>
                <div>email:{email}</div>
            </div>
        <button onClick={()=>setUserId(id)}>Show posts</button>
        </div>
    )
}