import {apiPersonService} from "./apiServices";
import {urls} from "../urls/urls";
export const PostService={
    loadData:async (setPosts)=>{
        let response=await apiPersonService.get(urls.posts.base)
        setPosts(response.data)
    },
    create:(post)=>apiPersonService.post(urls.posts.base,post)
}