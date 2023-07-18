export const Company =({user})=>{
    return(
        <div>
            <i><b>Company</b></i>
            <div>name:{user.company.name}</div>
            <div>catchPhrase:{user.company.catchPhrase}</div>
            <div>bs:{user.company.bs}</div>
        </div>
    )
}