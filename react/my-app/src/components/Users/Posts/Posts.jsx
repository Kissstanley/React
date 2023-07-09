import {UserPost} from "./Post/UserPost";
import {useState} from "react";

export const Posts=({userId})=>{
    const [posts,setPosts]=useState([])
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res=>res.json())
        .then(posts=>setPosts(posts))
        .catch()
    return (
        <div>
            {posts.map(post=><UserPost key={post.id} post={post}/>)}
        </div>
    )
}