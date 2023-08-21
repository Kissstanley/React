import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {episodesActions} from "../../redux/slices";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";
import styles from './Episodes.module.css'

const Episodes = () => {
    const dispatch=useDispatch()
    const {episodes}=useSelector(state => state.episodes)
    const [query,setQuery]=useSearchParams({page:'1'})

    const page=query.get('page')

    useEffect(()=>{
        dispatch(episodesActions.getAll({page}));
    },[page])

    return (
        <div className={styles.Episodes}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {
    Episodes
};