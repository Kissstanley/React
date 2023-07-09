import styles from './Post.module.css'
import {PostInfo} from "./PostInfo";
import {useState} from "react";

export const Post=({post})=>{
    const[show,setShow]=useState(false)
    const {id,title}=post;
    return(
        <div className={styles.box}>
            <div>id: {id} </div>
            <div>title: {title} </div>
            <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
            {
                show && <PostInfo post={post}/>
            }
        </div>
    )

}