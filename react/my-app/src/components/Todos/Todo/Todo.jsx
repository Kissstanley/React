export const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo
    return (
        <div>
            <div>userId: {userId}</div>
            <div>todoId: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <div>__________________________________________</div>
        </div>
    );
};