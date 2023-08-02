import React, {Component} from 'react';

export class Post extends Component {
    render() {
        const {userId,id,title}=this.props.post
        return (
            <div>
                <div>userId: {userId}</div>
                <div>postId: {id}</div>
                <div>title: {title}</div>
                <div>_____________________</div>
            </div>
        );
    }
}