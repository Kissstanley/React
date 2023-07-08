import {Post} from "./Post";
import {useEffect,useState} from "react";

export const PostComponent=()=>{
    const[posts,setPosts]=useState([])

    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts')
             .then( res=>res.json())
             .then(posts=>setPosts(posts))
              .catch()
    },[])
     return(
         <div>
                {posts.map((post)=><Post key={post.id} post={post}/>
                )}


         </div>
     )
 }

