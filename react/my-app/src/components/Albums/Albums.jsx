import {useEffect, useState} from "react";
import {albumsService, todosService} from "../../services";
import {Album} from "./Album/Album";

export const Albums = () => {
    const [albums,setAlbums]=useState([])

    useEffect(()=>{
        albumsService.getAll().then(({data})=>setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};