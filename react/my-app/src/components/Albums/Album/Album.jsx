export const Album = ({album}) => {
    const {userId,id,title}=album
    return (
        <div>
            <div>userId: {userId}</div>
            <div>albumId: {id}</div>
            <div>title: {title}</div>
            <div>__________________________________________</div>
        </div>
    );
};