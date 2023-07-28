import {Post} from "../Post/Post";
import {useEffect} from "react";
import {PostService} from "../../../services/PostService";

export const Posts=({posts,setPosts})=>{
    useEffect(()=>{
        PostService.loadData(setPosts)
    },[])
    return(
        <div>
            {posts.map(post=><Post key={post.body} post={post}/>)}
        </div>
    )
}