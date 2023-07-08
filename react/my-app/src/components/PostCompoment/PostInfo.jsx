export const PostInfo=({post})=> {
    const {id, userId, title, body} = post
    return (
        <>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body: {body}</div>
        </>
    );
};