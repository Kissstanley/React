import {Component} from "react";
import {commentServ} from "../services/commentService";
import {Comment} from "./Comment";

export class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }


    componentDidMount() {
        commentServ.getAll().then(({data})=>this.setState({comments:data}))
    }


    render() {
        return(
            <div>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}