import {jsApiServ} from "./jsApiServ";
import {urls} from "../constants/urls";
class PostService {
    getAll(){
        return jsApiServ.get(urls.json.posts)
    }
}

export const postService=new PostService()