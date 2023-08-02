import {jsApiServ} from "./jsApiServ";
import {urls} from "../constants/urls";
class CommentServ{
    getAll(){
        return jsApiServ.get(urls.json.comments)
    }
}

export const commentServ=new CommentServ()