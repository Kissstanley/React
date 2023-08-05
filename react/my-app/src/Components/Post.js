import {memo} from "react";

export const Post=memo(({posts,addPost})=>{
    console.log('jkwejgfje');
    return(
        <>
            <button onClick={addPost}>Add post</button>
            {posts.map((post,id)=><p key={id}>{post}</p>)}
        </>
    )
})