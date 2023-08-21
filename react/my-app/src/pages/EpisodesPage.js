import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";

import {Episodes} from "../Components";
import styles from './EpisodesPage.module.css'


const EpisodesPage = () => {
    const[query,setQuery]=useSearchParams()
   const {pages}=useSelector(state => state.episodes)
    return (
        <div className={styles.EpisodesPage}>
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange={(e,page)=>setQuery({page:page.toString()})}
            />
        </div>
    );
};

export default EpisodesPage;