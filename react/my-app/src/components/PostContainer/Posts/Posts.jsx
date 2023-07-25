import {Post} from "../Post/Post";
import {useEffect} from "react";

export const Posts=({posts,setPosts})=>{
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(posts=>posts.json())
            .then(posts=>setPosts(posts))
    },[])
    return(
        <div>
            {posts.map(post=><Post key={post.body} post={post}/>)}
        </div>
    )
}