import {useEffect, useState} from "react";
import {Post} from "./Post/Post";

export const Posts=({userId})=>{
    console.log(userId);
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(posts=>posts.json())
            .then(posts=>setPosts(posts)
            )},[userId])
    return(
        <>
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
        </>
    )

}