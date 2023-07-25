import {useState} from "react";
import {PostForm} from "./PostForm/PostForm";
import {Posts} from "./Posts/Posts";

export const PostContainer=()=>{
    const [posts,setPosts]=useState([])
    return(
        <div>
            <PostForm setPosts={setPosts}/>
            <Posts posts={posts} setPosts={setPosts}/>
        </div>
    )
}