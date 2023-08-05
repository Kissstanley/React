import {useFetch} from "../hooks/useFetch";

export const Thing=()=>{
    const users = useFetch('users')
    const posts = useFetch('posts')
    const comments = useFetch('comments')
    return(
        <div>
            {users.map(user=>(
                <div key={user.id}>
                    <div>id:{user.id}</div>
                    <div>name:{user.name}</div>
                    <div>username:{user.username}</div>
                    <div>email:{user.email}</div>
                </div>
            ))}
            <hr/>
            {posts.map(post=>(
                <div key={post.id}>
                    <div>userId:{post.userId}</div>
                    <div>id:{post.id}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </div>
            ))}
            <hr/>
            {comments.map(comment=>(
                <div key={comment.id}>
                    <div>postId:{comment.postId}</div>
                    <div>id:{comment.id}</div>
                    <div>name:{comment.name}</div>
                    <div>body:{comment.body}</div>
                    <div>email:{comment.email}</div>
                </div>
            ))}
            <hr/>
        </div>
    )
}