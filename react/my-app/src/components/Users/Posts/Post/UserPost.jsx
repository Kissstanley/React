export const UserPost=({post})=>{
    const{id,userId,title,body}=post
    return(
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>content:{body}</div>
        </div>
    )
}