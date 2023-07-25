import {useForm} from "react-hook-form";

export const PostForm=({setPosts})=>{
    const{register,handleSubmit,reset} =useForm()

    const save=(post)=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(post)
        }).then(value=>value.json()).then(value=>{
            setPosts(prev=>[...prev,value])
            reset()
        })
    }



    return(
        <form onSubmit={handleSubmit(save)}>
            <label>userId: <input type={"text"} {...register('userId')}/></label>
            <label>title: <input type={"text"} {...register('title')}/></label>
            <label>body: <input type={"text"} {...register('body')}/></label>
            <button>Save</button>
        </form>
    )
}