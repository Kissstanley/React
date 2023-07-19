
export const Post=({post})=>{
    const{id,userId,body,title}=post

    return(
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    )

}