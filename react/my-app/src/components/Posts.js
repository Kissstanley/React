import {Component} from "react";
import {jsApiServ} from "../services/jsApiServ";
import {postService} from "../services/postService";
import {Post} from "./Post";

export class Posts extends Component{
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }

    }


    componentDidMount() {
        postService.getAll().then(({data})=>this.setState({posts:data}))
    }


    render() {
        return(
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}