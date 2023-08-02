import React, {Component} from 'react';

export class Comment extends Component {
    render() {
        const {postId,id,name,email,body}=this.props.comment
        return (
            <div>
                <div>postId: {postId}</div>
                <div>commentId: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
                <div>________________________</div>
            </div>
        );
    }
}
