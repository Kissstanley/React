import {useForm} from "react-hook-form";
import {PostService} from "../../../services/PostService";

export const PostForm=({setPosts})=>{
    const{register,handleSubmit,reset} =useForm()

    const save=async (post)=>{
        await PostService.create(post)
        console.log(post);
        setPosts(prev=>[...prev,post])
        reset()
    }



    return(
        <form onSubmit={handleSubmit(save)}>
            <label>id: <input type={"number"} {...register('id')}/></label>
            <label>userId: <input type={"number"} {...register('userId')}/></label>
            <label>title: <input type={"text"} {...register('title')}/></label>
            <label>body: <input type={"text"} {...register('body')}/></label>
            <button>Save</button>
        </form>
    )
}